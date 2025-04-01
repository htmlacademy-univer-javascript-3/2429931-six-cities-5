import { memo, useMemo } from 'react';
import {OfferCommonInfo} from '../../types/offers';
import CitiesCard from '../citiesCard/Index';
import classNames from 'classnames';
import { CARDS_LIST_STYLE } from './cardsList.constants';
import { CardClassType, CardType } from '../../types/card';
import { getClassNamesForCard } from '../citiesCard/classNames';

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

  const classNamesTypeCard: CardClassType = useMemo(() => getClassNamesForCard(cardType), [cardType]);
  return(
    <div className={classNamesList}>
      {offers.map((offer)=>(
        <CitiesCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => onListItemHover(offer.id)}
          onMouseLeave={() => onListItemHover('')}
          classNamesTypeCards={classNamesTypeCard}
        />
      ))}
    </div>
  );
});

CitiesCardsList.displayName = 'CitiesCardsList';
