import { CityNameType } from './city';
import { OfferCommonInfo } from './offers';
import { store } from '../store';
import { FilterOptionsDescriptionType } from './filter';

export type State = {
  city: CityNameType;
  offers: OfferCommonInfo[];
  activeSortingType: FilterOptionsDescriptionType;
}

export type AppDispatch = typeof store.dispatch;
