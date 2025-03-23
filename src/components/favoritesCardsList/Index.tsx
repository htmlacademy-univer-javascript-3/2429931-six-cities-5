import { Link } from 'react-router-dom';
import { Offer, OffersPreviewInfo } from '../../types/offers';
import { FavoriteCard } from '../favoriteCard/Index';
import { groupOffersByCity } from '../../utils';

type FavoritesCardsListProps = {
  offers: Offer[];
}

export const FavoritesCardsList = ({offers}: FavoritesCardsListProps) => (
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
            <FavoriteCard
              key={offer.id}
              offer={offer as OffersPreviewInfo}
            />
          ))}
        </div>
      </li>
    ))}
  </ul>
);
