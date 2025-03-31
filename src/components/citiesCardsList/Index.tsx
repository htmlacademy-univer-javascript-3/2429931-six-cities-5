import {OfferCommonInfo} from '../../types/offers';
import CitiesCard from '../citiesCard/Index';

type CitiesCardsListProps = {
  offers: OfferCommonInfo[];
  onListItemHover: (id: string) => void;
}

export const CitiesCardsList = ({offers, onListItemHover}: CitiesCardsListProps) => (
  <>
    {offers.map((offer)=>(
      <CitiesCard
        key={offer.id}
        offer={offer}
        onMouseEnter={() => onListItemHover(offer.id)}
        onMouseLeave={() => onListItemHover('')}
      />
    ))}
  </>
);
