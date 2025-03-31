import { optionsType } from './types/optionsDate';

export enum AppPath {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const RATING_TITLES: string[] = ['terribly','badly','not bad','good','excellent'];

export const OPTIONS_DATE: optionsType = {
  month: 'long',
  year: 'numeric',
};
