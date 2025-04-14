import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadCurrentOffer, loadFavoriteOffers, loadOffers, requireAuthorization, setCommentDataLoadingStatus, setCurrentOfferDataLoadingStatus, setError, setOffersDataLoadingStatus, setUser, sortOffers } from './actions';
import { State } from '../types/state';
import { AuthorizationStatus, FILTER_OPTIONS } from '../const';


const initialState: State = {
  city: 'Paris',
  offers: [],
  currentOffer: null,
  activeSortingType: FILTER_OPTIONS.popular,
  error: null,
  isOffersDataLoading: false,
  isCurrentOfferDataLoading: false,
  isCommentDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  reviews: [],
  nearbyOffers: [],
  favoriteOffers: [],
  user: null,
};

export const reducer = createReducer(initialState,(builder) => {
  builder
    .addCase(changeCity, (state, {payload}) => {
      state.city = payload.cityName;
    })
    .addCase(loadOffers, (state, {payload}) => {
      state.offers = payload.offers;
    })
    .addCase(loadCurrentOffer, (state, {payload}) => {
      state.currentOffer = payload.currentOffer;
      state.reviews = payload.comments;
      state.nearbyOffers = payload.nearbyOffers;
    })
    .addCase(loadFavoriteOffers, (state, {payload}) => {
      state.favoriteOffers = payload.favoriteOffers;
    })
    .addCase(setOffersDataLoadingStatus, (state, {payload}) => {
      state.isOffersDataLoading = payload;
    })
    .addCase(setCurrentOfferDataLoadingStatus, (state, {payload}) => {
      state.isCurrentOfferDataLoading = payload;
    })
    .addCase(sortOffers, (state, {payload}) => {
      state.activeSortingType = payload.activeSortingType;
    })
    .addCase(requireAuthorization, (state, {payload}) => {
      state.authorizationStatus = payload;
    })
    .addCase(setError, (state, {payload}) => {
      state.error = payload;
    })
    .addCase(setCommentDataLoadingStatus, (state, {payload}) => {
      state.isCommentDataLoading = payload;
    })
    .addCase(setUser, (state, {payload}) => {
      state.user = payload;
    });
});
