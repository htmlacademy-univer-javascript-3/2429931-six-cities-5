import { Link } from 'react-router-dom';
import { OfferCommonInfo} from '../../types/offers';
import { groupOffersByCity } from '../../utils';
import CitiesCard from '../citiesCard/Index';
import { CardType } from '../../types/card';

type FavoritesCardsListProps = {
  offers: OfferCommonInfo[];
  cardType: CardType;
}

export const FavoritesCardsList = ({offers, cardType}: FavoritesCardsListProps) => (
  <ul className="favorites__list">
    {Object.entries(groupOffersByCity(offers)).map(([city, groupedOffers])=>{
      if(groupedOffers.length !== 0){
        return(
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
                  cardType={cardType}
                  onMouseEnter={()=>{}}
                  onMouseLeave={()=>{}}
                />
              ))}
            </div>
          </li>
        );
      }
    }
    )}
  </ul>
);
