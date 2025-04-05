import { CityNameType } from './city';
import { ReviewType } from './reviews';
import { User } from './user';

export type OfferCommonInfo = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OfferCommonInfoCity;
  location: OfferCommonInfoLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type OfferBigInfo = OfferCommonInfo & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: OffersBigInfoHost;
  images: string[];
  maxAdults: number;
  reviews?: ReviewType[];
}

export type OffersBigInfoHost = User

export type OfferCommonInfoLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type OfferCommonInfoCity = {
  name: CityNameType;
  location: OfferCommonInfoLocation;
}

export type GroupedOffersByCity = {
  [city in CityNameType]?: OfferCommonInfo[];
}
