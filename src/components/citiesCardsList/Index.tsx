import {Offers} from '../../types/offers';
import CitiesCard from '../citiesCard/Index';

type CitiesCardsListProps = {
  offers: Offers;
}

export const CitiesCardsList = ({offers}: CitiesCardsListProps) => (
  <>
    {offers.map((offer)=>(
      <CitiesCard
        key={offer.id}
        offer={offer}
      />
    ))}
  </>
);
