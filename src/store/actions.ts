import { createAction } from '@reduxjs/toolkit';
import { CityNameType } from '../types/city';
import { OfferCommonInfo } from '../types/offers';
import { FilterOptionsDescriptionType } from '../types/filter';

export const changeCity = createAction<{cityName: CityNameType}>('city/changeCity');

export const loadOffers = createAction<{offers: OfferCommonInfo[]}>('offers/loadOffers');

export const sortOffers = createAction<{activeSortingType: FilterOptionsDescriptionType}>('offers/sortOffer');

export const setError = createAction<string | null>('offers/setError');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');
