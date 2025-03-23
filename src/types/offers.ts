import { Review } from './reviews';

export type Offer = Pick<OffersPreviewInfo,'previewImage'> & OffersBigInfo

export type OffersCommonInfo = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OffersPrevInfoCity;
  location: OfferPreviewInfoLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type OffersBigInfo = OffersCommonInfo & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: OffersBigInfoHost;
  images: string[];
  maxAdults: number;
  reviews: Review[];
}

export type OffersBigInfoHost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type OffersPreviewInfo = OffersCommonInfo & {
  previewImage: string;
}

export type OfferPreviewInfoLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type OffersPrevInfoCity = {
  name: string;
  location: OfferPreviewInfoLocation;
}
