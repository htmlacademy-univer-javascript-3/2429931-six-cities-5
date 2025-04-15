import { Link } from 'react-router-dom';
import { OfferCommonInfo } from '../../types/offers';
import { PremiumCard } from '../premiumCard/Index';
import { linkToOfferForId } from '../../utils';
import { Rating } from '../rating/Index';
import { CardClassType, CardType } from '../../types/card';
import { useMemo } from 'react';
import { getClassNamesForCard } from './classNames';
import { Bookmark } from '../bookmark/Index';

type CitiesCardProps = {
  offer: OfferCommonInfo;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  cardType: CardType;
}

const CitiesCard = ({offer, onMouseEnter, onMouseLeave, cardType}:CitiesCardProps): JSX.Element => {
  const classNamesTypeCards: CardClassType = useMemo(() => getClassNamesForCard(cardType), [cardType]);

  const {
    classNamesCard,
    classNamesImgWrap,
    imgHeight,
    imgWidth,
    classNamesInfo,
  } = classNamesTypeCards;

  return(
    <article className={classNamesCard}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {offer.isPremium
        ? <PremiumCard/>
        : null}

      <div className={classNamesImgWrap}>
        <Link to={linkToOfferForId(offer)}>
          <img className="place-card__image" src={offer.previewImage} width={imgWidth} height={imgHeight} alt={offer.title} />
        </Link>
      </div>
      <div className={classNamesInfo}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark
            cardType={cardType}
            offer={offer}
          />
        </div>
        <Rating offer={offer}/>
        <h2 className="place-card__name">
          <Link to={linkToOfferForId(offer)}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

export default CitiesCard;
