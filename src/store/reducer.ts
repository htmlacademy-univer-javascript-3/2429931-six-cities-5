import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, sortOffers } from './actions';
import { State } from '../types/state';
import { AuthorizationStatus, FILTER_OPTIONS } from '../const';


const initialState: State = {
  city: 'Paris',
  offers: [],
  activeSortingType: FILTER_OPTIONS.popular,
  error: null,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState,(builder) => {
  builder
    .addCase(changeCity, (state, {payload}) => {
      state.city = payload.cityName;
    })
    .addCase(loadOffers, (state, {payload}) => {
      state.offers = payload.offers;
    })
    .addCase(setOffersDataLoadingStatus, (state, {payload}) => {
      state.isOffersDataLoading = payload;
    })
    .addCase(sortOffers, (state, {payload}) => {
      state.activeSortingType = payload.activeSortingType;
    })
    .addCase(requireAuthorization, (state, {payload}) => {
      state.authorizationStatus = payload;
    })
    .addCase(setError, (state, {payload}) => {
      state.error = payload;
    });
});
