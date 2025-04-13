import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferCommonInfo } from '../types/offers';
import { APIRoute, AppPath, AuthorizationStatus } from '../const';
import { loadOffers, redirectToRoute, requireAuthorization, setOffersDataLoadingStatus } from './actions';
import { AuthData } from '../types/authData';
import { UserLoginData } from '../types/user';
import { dropToken, saveToken } from '../services/token';
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
    processErrorHandle('');
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
