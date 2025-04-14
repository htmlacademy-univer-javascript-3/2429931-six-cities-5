import { CityNameType } from './types/city';
import { DateOptions } from './types/optionsDate';

export enum AppPath {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Other = '/*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES: CityNameType[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const RATING_TITLES: string[] = ['terribly','badly','not bad','good','excellent'];

export const OPTIONS_DATE: DateOptions = {
  month: 'long',
  year: 'numeric',
};

export const FILTER_OPTIONS = {
  popular: 'Popular',
  low: 'Price: low to high',
  high: 'Price: high to low',
  top:'Top rated first',
} as const;

export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby',
  Comments = '/comments'
}
