import { Link } from 'react-router-dom';
import { Offer } from '../../types/offers';
import { FavoriteCard } from '../favoriteCard/Index';

type FavoritesCardsListProps = {
  offers: Offer[];
}
type GroupedOffersByCity = {
  [city: string]: Offer[];
}

export const FavoritesCardsList = ({offers}: FavoritesCardsListProps) => {
  const groupedOffersByCity = offers.reduce<GroupedOffersByCity>((newGroupedOffers, offer) => {
    const city: string = offer.city.name;
    if (!newGroupedOffers[city]){
      newGroupedOffers[city] = [];
    }
    newGroupedOffers[city].push(offer);
    return newGroupedOffers;
  }, {});

  return(
    <ul className="favorites__list">
      {Object.entries(groupedOffersByCity).map(([city, groupedOffers])=>(
        offers.length !== 0
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
              {groupedOffers.map((offer)=>(
                <FavoriteCard
                  key={offer.id}
                  offer={offer}
                />
              ))}
            </div>
          </li>
          : null
      ))}
    </ul>
  );
};
