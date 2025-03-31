import {OfferCommonInfo} from '../../types/offers';
import CitiesCard from '../citiesCard/Index';
import classNames from 'classnames';

type CitiesCardsListProps = {
  offers: OfferCommonInfo[];
  onListItemHover: (id: string) => void;
  isCheckingCards: {[id: string]: boolean};
}

export const CitiesCardsList = ({offers, onListItemHover, isCheckingCards}: CitiesCardsListProps) => {
  const {isMainCard, isNearCard} = isCheckingCards;

  const classNamesList = classNames(
    'places__list',
    {
      'cities__places-list tabs__content' : isMainCard,
      'near-places__list' : isNearCard,
    },
  );

  return(
    <div className={classNamesList}>
      {offers.map((offer)=>(
        <CitiesCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => onListItemHover(offer.id)}
          onMouseLeave={() => onListItemHover('')}
          isCheckingCards={isCheckingCards}
        />
      ))}
    </div>
  );
};
