import { Link } from 'react-router-dom';
import { OfferCommonInfo} from '../../types/offers';
import { groupOffersByCity } from '../../utils';
import CitiesCard from '../citiesCard/Index';
import { getClassNamesForCard } from '../citiesCard/classNames';
import { useMemo } from 'react';

type FavoritesCardsListProps = {
  offers: OfferCommonInfo[];
  isCheckingCards: {[id: string]: boolean};
}

export const FavoritesCardsList = ({offers, isCheckingCards}: FavoritesCardsListProps) => {
  const classNamesCardOfKind = useMemo(() => getClassNamesForCard(isCheckingCards),[isCheckingCards]);
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
                classNamesCardOfKind={classNamesCardOfKind}
                onMouseEnter={function (): void {
                  throw new Error('Function not implemented.');
                } }
                onMouseLeave={function (): void {
                  throw new Error('Function not implemented.');
                } }
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
