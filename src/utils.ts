import { OPTIONS_DATE } from './const';
import { GroupedOffersByCity, OfferCommonInfo } from './types/offers';

export const linkToOfferForId = (offer: OfferCommonInfo) => `/offer/${offer.id}`;

export const groupOffersByCity = (offers: OfferCommonInfo[]) => (
  offers.reduce<GroupedOffersByCity>((newGroupedOffers, offer) => {
    const city: string = offer.city.name;
    if (!newGroupedOffers[city]){
      newGroupedOffers[city] = [];
    }
    newGroupedOffers[city].push(offer);
    return newGroupedOffers;
  }, {})
);

export const takeNewDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleString('ru', OPTIONS_DATE);
};
