import { CityNameType } from './city';
import { OfferCommonInfo } from './offers';
import { store } from '../store';

export type State = {
  city: CityNameType;
  offers: OfferCommonInfo[];
}

export type AppDispatch = typeof store.dispatch;
