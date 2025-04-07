import { createAction } from '@reduxjs/toolkit';
import { CityNameType } from '../types/city';
import { OfferCommonInfo } from '../types/offers';
import { FilterOptionsDescriptionType } from '../types/filter';

export const changeCity = createAction<{cityName: CityNameType}>('city/change');
export const loadOffers = createAction<{offers: OfferCommonInfo[]}>('city/loadOffers');
export const sortOffers = createAction<{activeSortingType: FilterOptionsDescriptionType}>('city/sortOffer');
