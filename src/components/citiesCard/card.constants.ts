import { CardType } from '../../types/card';

export const CARD_STYLES: Record<CardType, string> = {
  main: 'cities__card',
  favorite: 'favorites__card',
  near: 'near-places__card places',
};
export const CARD_STYLES_IMG_WRAP: Record<CardType, string> = {
  main: 'cities__image-wrapper',
  favorite: 'favorites__image-wrapper',
  near: 'near-places__image-wrapper',
};

export const CARD_STYLES_INFO: Record<CardType, string> = {
  main: '',
  favorite: 'favorites__card-info',
  near: '',
};

export const CARD_STYLES_BOOKMARK: Record<CardType, string> = {
  main: '',
  favorite: 'place-card__bookmark-button--active',
  near: '',
};
