import { OfferCommonInfo } from '../../types/offers';

type RatingProper = {
  offer: OfferCommonInfo;
}

export const Rating = ({offer}:RatingProper) => (
  <div className="place-card__rating rating">
    <div className="place-card__stars rating__stars">
      <span style={{width : `${20 * Math.round(offer.rating)}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>
);
