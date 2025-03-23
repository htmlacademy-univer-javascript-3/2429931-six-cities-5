import { Offer } from './types/offers';

export const linkToOfferForId = (offer: Offer) => `/offer/${offer.id}`;
