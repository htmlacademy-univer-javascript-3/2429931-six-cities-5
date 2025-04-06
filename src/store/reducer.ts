import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers } from './actions';
import { State } from '../types/state';


const initialState: State = {
  city: 'Paris',
  offers: []
};

export const reducer = createReducer(initialState,(builder) => {
  builder
    .addCase(changeCity, (state, {payload}) => {
      state.city = payload.cityName;
    })
    .addCase(loadOffers, (state, {payload}) => {
      state.offers = payload.offers;
    });
});
