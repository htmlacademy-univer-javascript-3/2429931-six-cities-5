import { Review } from './reviews';

export type Offer = OffersPreviewInfo | OffersBigInfo

export type OffersCommonInfo = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OffersPreviewInfoCity;
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
  reviews?: Review[];
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

export type OffersPreviewInfoCity = {
  name: string;
  location: OfferPreviewInfoLocation;
}

export type GroupedOffersByCity = {
  [city: string]: Offer[];
}
