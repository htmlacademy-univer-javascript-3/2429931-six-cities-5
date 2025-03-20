import { Reviews } from './reviews';

export type Offers = Offer[]

export type Offer = Pick<OffersPrevInfo,'previewImage'> & OffersBigInfo

export type OffersCommonInfo = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OffersPrevInfoCite;
  location: OfferPrevInfoLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type OffersBigInfo = OffersCommonInfo & {
  description: string;
  bedrooms: number;
  goods: [string];
  host: OffersBigInfoHost;
  images: [string];
  maxAdults: number;
  reviews: Reviews;
}

export type OffersBigInfoHost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type OffersPrevInfo = OffersCommonInfo & {
  previewImage: string;
}

export type OfferPrevInfoLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type OffersPrevInfoCite = {
  name: string;
  location: OfferPrevInfoLocation;
}
