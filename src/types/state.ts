import { CityNameType } from './city';
import { OfferCommonInfo } from './offers';
import { store } from '../store';
import { FilterOptionsDescriptionType } from './filter';
import { AuthorizationStatus } from '../const';

export type State = {
  city: CityNameType;
  offers: OfferCommonInfo[];
  activeSortingType: FilterOptionsDescriptionType;
  error: string | null;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
}

export type AppDispatch = typeof store.dispatch;
