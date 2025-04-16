import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferBigInfo, OfferCommonInfo } from '../types/offers';
import { APIRoute, AppPath, AuthorizationStatus } from '../const';
import { loadCurrentOffer, loadFavoriteOffers, loadOffers, redirectToRoute, requireAuthorization, setCommentDataLoadingStatus, setCurrentOfferDataLoadingStatus, setFavoriteOffersDataLoadingStatus, setOffersDataLoadingStatus, setUser } from './actions';
import { AuthData } from '../types/authData';
import { User, UserLoginData } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { ReviewSubmit, ReviewType } from '../types/reviews';
import { sortReviewsDateByHigh } from '../utils';
import { processErrorHandle } from '../services/processErrorHandle';
import { ChangeStatusData } from '../types/changeStatusData';

export const fetchOffersActions = createAsyncThunk<void, undefined,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferCommonInfo[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers({offers: data}));
  }
);

export const fetchFavoriteOffersActions = createAsyncThunk<void, undefined,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFavoriteOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferCommonInfo[]>(APIRoute.Favorite);
    dispatch(setFavoriteOffersDataLoadingStatus(false));
    dispatch(loadFavoriteOffers({favoriteOffers: data}));
  }
);

export const changeFavoriteStatusAction = createAsyncThunk<void, ChangeStatusData,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/change',
  async ({id, status, cardType}, {dispatch,extra: api, getState}) => {
    const {data} = await api.post<OfferCommonInfo>(`${APIRoute.Favorite}/${id}/${status}`);
    const { offers, currentOffer, nearbyOffers, reviews: comments, favoriteOffers } = getState();

    if(favoriteOffers.some((f) => (data.id === f.id))){
      dispatch(loadFavoriteOffers({favoriteOffers: [...favoriteOffers.filter((f) => (data.id !== f.id))]}));
    } else {
      dispatch(loadFavoriteOffers({favoriteOffers: [...favoriteOffers, data]}));
    }

    switch (cardType) {
      case 'main':
        dispatch(loadOffers({offers: [...offers.map((n) => n.id === data.id ? { ...n, isFavorite: !n.isFavorite } : n)]}));
        break;
      case 'offer':
        if (currentOffer) {
          dispatch(loadCurrentOffer({
            currentOffer: { ...currentOffer, isFavorite: !currentOffer.isFavorite },
            nearbyOffers,
            comments
          }));
        }
        break;
      case 'near':
        if (currentOffer) {
          dispatch(loadCurrentOffer({
            currentOffer: currentOffer.id === id ? { ...currentOffer, isFavorite: !currentOffer.isFavorite } : currentOffer,
            nearbyOffers: nearbyOffers.map((n) => n.id === id ? { ...n, isFavorite: !n.isFavorite } : n),
            comments
          }));
        }
        break;
      default:
        break;
    }
  }
);

export const fetchCurrentOfferActions = createAsyncThunk<void, string,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOffer',
  async (id, {dispatch, extra: api}) => {
    dispatch(setCurrentOfferDataLoadingStatus(true));
    try {
      const [offerResponse, nearbyOffersResponse, commentsResponse] = await Promise.all([
        api.get<OfferBigInfo>(`${APIRoute.Offers}/${id}`),
        api.get<OfferCommonInfo[]>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`),
        api.get<ReviewType[]>(`${APIRoute.Comments}/${id}`),
      ]);

      const offer = offerResponse.data;
      const nearbyOffers = nearbyOffersResponse.data;
      const comments = commentsResponse.data;

      sortReviewsDateByHigh(comments);

      dispatch(loadCurrentOffer({
        currentOffer: offer,
        nearbyOffers,
        comments
      }));
    } catch {
      dispatch(redirectToRoute(AppPath.Other));
    } finally {
      dispatch(setCurrentOfferDataLoadingStatus(false));
    }
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<User>(APIRoute.Login);
      dispatch(setUser(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      processErrorHandle('');
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login:email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserLoginData>(APIRoute.Login, { email, password});
    saveToken(data.token);
    dispatch(setUser(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppPath.Main));
  }
);

export const logoutAction = createAsyncThunk<void, undefined,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const reviewSubmit = createAsyncThunk<void, ReviewSubmit,
{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'review/submit',
  async ({id,rating, comment}, {dispatch, extra: api}) => {
    try{
      dispatch(setCommentDataLoadingStatus(true));
      await api.post<ReviewType>(`${APIRoute.Comments}/${id}`, { rating, comment});
      dispatch(fetchCurrentOfferActions(id));
    } finally {
      dispatch(setCommentDataLoadingStatus(false));
    }
  }
);
