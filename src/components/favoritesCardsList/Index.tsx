import { Link } from 'react-router-dom';
import { CITIES} from '../../const';
import { Offers } from '../../types/offers';
import { FavoriteCard } from '../favoriteCard/Index';

function filterOffersInCity(offers: Offers, city: string): Offers{
  return offers.filter((offer)=>offer.city.name === city);
}
type FavoritesCardsListProps = {
  offers: Offers;
}
export const FavoritesCardsList = ({offers}: FavoritesCardsListProps) => (
  <ul className="favorites__list">
    {CITIES.map((city)=>{
      const offersInCityArray = filterOffersInCity(offers, city);
      return(
        offersInCityArray.length !== 0
          ?
          <li key={city} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="/">
                  <span>{city}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {offersInCityArray.map((offer)=>(
                <FavoriteCard
                  key={offer.id}
                  offer={offer}
                />
              ))}
            </div>
          </li>
          : null
      );
    })}
  </ul>
);
