import { GroupedOffersByCity, Offer } from './types/offers';

export const linkToOfferForId = (offer: Offer) => `/offer/${offer.id}`;

export const groupOffersByCity = (offers: Offer[]) => (
  offers.reduce<GroupedOffersByCity>((newGroupedOffers, offer) => {
    const city: string = offer.city.name;
    if (!newGroupedOffers[city]){
      newGroupedOffers[city] = [];
    }
    newGroupedOffers[city].push(offer);
    return newGroupedOffers;
  }, {})
);
