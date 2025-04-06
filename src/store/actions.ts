import { createAction } from '@reduxjs/toolkit';
import { CityNameType } from '../types/city';
import { OfferCommonInfo } from '../types/offers';

export const changeCity = createAction<{cityName: CityNameType}>('city/change');
export const loadOffers = createAction<{offers: OfferCommonInfo[]}>('city/loadOffers');
