import { Link } from 'react-router-dom';
import { OfferCommonInfo} from '../../types/offers';
import { groupOffersByCity } from '../../utils';
import CitiesCard from '../citiesCard/Index';
import { CardClassType, CardType } from '../../types/card';
import { useMemo } from 'react';
import { getClassNamesForCard } from '../citiesCard/classNames';

type FavoritesCardsListProps = {
  offers: OfferCommonInfo[];
  cardType: CardType;
}

export const FavoritesCardsList = ({offers, cardType}: FavoritesCardsListProps) => {
  const classNamesTypeCard: CardClassType = useMemo(() => getClassNamesForCard(cardType), [cardType]);

  return(
    <ul className="favorites__list">
      {Object.entries(groupOffersByCity(offers)).map(([city, groupedOffers])=>(
        <li key={city} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {groupedOffers.map((offer)=>(
              <CitiesCard
                key={offer.id}
                offer={offer}
                classNamesTypeCards={classNamesTypeCard}
                onMouseEnter={()=>{}}
                onMouseLeave={()=>{}}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
