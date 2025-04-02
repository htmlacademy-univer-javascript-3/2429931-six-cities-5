import { memo } from 'react';
import {OfferCommonInfo} from '../../types/offers';
import CitiesCard from '../citiesCard/Index';
import classNames from 'classnames';
import { CARDS_LIST_STYLE } from './cardsList.constants';
import { CardType } from '../../types/card';

type CitiesCardsListProps = {
  offers: OfferCommonInfo[];
  onListItemHover: (id: string) => void;
  cardType: CardType;
}

export const CitiesCardsList = memo(({offers, onListItemHover, cardType}: CitiesCardsListProps) => {
  const classNamesList = classNames(
    'places__list',
    CARDS_LIST_STYLE[cardType]
  );

  return(
    <div className={classNamesList}>
      {offers.map((offer)=>(
        <CitiesCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => onListItemHover(offer.id)}
          onMouseLeave={() => onListItemHover('')}
          cardType={cardType}
        />
      ))}
    </div>
  );
});

CitiesCardsList.displayName = 'CitiesCardsList';
