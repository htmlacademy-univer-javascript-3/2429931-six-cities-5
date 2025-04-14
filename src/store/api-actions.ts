import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferBigInfo, OfferCommonInfo } from '../types/offers';
import { APIRoute, AppPath, AuthorizationStatus } from '../const';
import { loadCurrentOffer, loadFavoriteOffers, loadOffers, redirectToRoute, requireAuthorization, setCommentDataLoadingStatus, setCurrentOfferDataLoadingStatus, setOffersDataLoadingStatus } from './actions';
import { AuthData } from '../types/authData';
import { UserLoginData } from '../types/user';
import { dropToken, saveToken } from '../services/token';
import { ReviewSubmit, ReviewType } from '../types/reviews';
import { sortReviewsDateByHigh } from '../utils';
import { processErrorHandle } from '../services/processErrorHandle';

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
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferCommonInfo[]>(APIRoute.Favorite);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadFavoriteOffers({favoriteOffers: data}));
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
      const {data: offer} = await api.get<OfferBigInfo>(`${APIRoute.Offers}/${id}`);
      const {data: nearbyOffers} = await api.get<OfferCommonInfo[]>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
      const {data: comments} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${id}`);

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
      await api.get(APIRoute.Login);
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
    const {data:{token}} = await api.post<UserLoginData>(APIRoute.Login, { email, password});
    saveToken(token);
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
