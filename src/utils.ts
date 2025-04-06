import { Params } from 'react-router-dom';
import { OPTIONS_DATE, FILTER_OPTIONS } from './const';
import { GroupedOffersByCity, OfferCommonInfo } from './types/offers';
import { CityNameType } from './types/city';
import { FilterOptionsDescriptionType } from './types/filter';

export const linkToOfferForId = (offer: OfferCommonInfo) => `/offer/${offer.id}`;

export const groupOffersByCity = (offers: OfferCommonInfo[]) => {
  const initialValue: GroupedOffersByCity = {
    Paris: [],
    Cologne: [],
    Brussels: [],
    Amsterdam: [],
    Hamburg: [],
    Dusseldorf: []
  };
  return(
    offers.reduce<GroupedOffersByCity>((newGroupedOffers, offer) => {
      const city: CityNameType = offer.city.name;
      if (!newGroupedOffers[city]){
        newGroupedOffers[city] = [];
      }
      newGroupedOffers[city].push(offer);
      return newGroupedOffers;
    }, initialValue)
  );
};

export const takeNewDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleString('ru', OPTIONS_DATE);
};

export const findCurrentOfferIndex = (offers:OfferCommonInfo[], param: Readonly<Params<string>>) => offers.findIndex((o) => o.id === param.id);

export const getNearOffers = (offers: OfferCommonInfo[], index: number) => ([...offers.slice(0, index),...offers.slice(index + 1)]);

export const getCurrentCityOffers = (offers: OfferCommonInfo[], currentCity: CityNameType) => offers.filter((offer: OfferCommonInfo) => offer.city.name === currentCity);

export const sortOfferByHigh = (offers: OfferCommonInfo[]) => (offers.sort((a,b) => b.price - a.price));

export const sortOfferByLow = (offers: OfferCommonInfo[]) => (offers.sort((a,b) => b.price - a.price));

export const sortOfferByRating = (offers: OfferCommonInfo[]) => (offers.sort((a,b) => b.rating - a.rating));

export const getSorter = (sortByType: FilterOptionsDescriptionType) => {
  switch(sortByType){
    case FILTER_OPTIONS.popular:
      return (offers: OfferCommonInfo[]) => offers;
    case FILTER_OPTIONS.high:
      return sortOfferByHigh;
    case FILTER_OPTIONS.low:
      return sortOfferByLow;
    case FILTER_OPTIONS.top:
      return sortOfferByRating;
    default:
      return (offers: OfferCommonInfo[]) => offers;
  }
};
