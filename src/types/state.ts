import { CityNameType } from './city';
import { OfferBigInfo, OfferCommonInfo } from './offers';
import { store } from '../store';
import { FilterOptionsDescriptionType } from './filter';
import { AuthorizationStatus } from '../const';
import { ReviewType } from './reviews';

export type State = {
  city: CityNameType;
  offers: OfferCommonInfo[];
  currentOffer: OfferBigInfo | null;
  activeSortingType: FilterOptionsDescriptionType;
  error: string | null;
  isOffersDataLoading: boolean;
  isCurrentOfferDataLoading: boolean;
  isCommentDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  nearbyOffers: OfferCommonInfo[];
  reviews: ReviewType[];
  favoriteOffers: OfferCommonInfo[];
}

export type AppDispatch = typeof store.dispatch;
