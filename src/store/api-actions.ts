import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferCommonInfo } from '../types/offers';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { loadOffers, setError, setOffersDataLoadingStatus } from './actions';
import { store } from '.';

export const fetchOffersActions = createAsyncThunk<void, undefined, {
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

export const clearErrorAction = createAsyncThunk(
  'offers/clearErrors',
  () => setTimeout(() => {
    store.dispatch(setError(null));
  }, TIMEOUT_SHOW_ERROR)
);
