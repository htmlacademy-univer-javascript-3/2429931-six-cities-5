import { Link } from 'react-router-dom';
import { OffersPreviewInfo } from '../../types/offers';
import { PremiumCard } from '../premiumCard/Index';
import { linkToOfferForId } from '../../utils';

type CitiesCardProps = {
  offer: OffersPreviewInfo;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const CitiesCard = ({offer, onMouseEnter, onMouseLeave}:CitiesCardProps): JSX.Element => (
  <article className="cities__card place-card"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {offer.isPremium
      ? <PremiumCard/>
      : null}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={linkToOfferForId(offer)}>
        <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width : `${20 * offer.rating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={linkToOfferForId(offer)}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);

export default CitiesCard;
