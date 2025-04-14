import { createAction } from '@reduxjs/toolkit';
import { CityNameType } from '../types/city';
import { OfferBigInfo, OfferCommonInfo } from '../types/offers';
import { FilterOptionsDescriptionType } from '../types/filter';
import { AppPath, AuthorizationStatus } from '../const';
import { ReviewType } from '../types/reviews';
import { User } from '../types/user';

export const changeCity = createAction<{cityName: CityNameType}>('city/changeCity');

export const loadOffers = createAction<{offers: OfferCommonInfo[]}>('offers/loadOffers');

export const loadCurrentOffer = createAction<{currentOffer: OfferBigInfo; nearbyOffers: OfferCommonInfo[]; comments: ReviewType[]}>('offers/loadCurrentOffer');

export const loadFavoriteOffers = createAction<{favoriteOffers: OfferCommonInfo[]}>('offers/loadFavoriteOffers');

export const sortOffers = createAction<{activeSortingType: FilterOptionsDescriptionType}>('offers/sortOffer');

export const setError = createAction<string | null>('offers/setError');

export const setOffersDataLoadingStatus = createAction<boolean>('offers/setOffersDataLoadingStatus');

export const setCurrentOfferDataLoadingStatus = createAction<boolean>('offers/setCurrentOfferDataLoadingStatus');

export const setCommentDataLoadingStatus = createAction<boolean>('offers/setCommentDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppPath>('app/redirectToRoute');

export const setUser = createAction<User>('user/setUser');
