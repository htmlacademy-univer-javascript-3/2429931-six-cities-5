import { useState } from 'react';
import {OfferCommonInfo} from '../../types/offers';
import CitiesCard from '../citiesCard/Index';

type CitiesCardsListProps = {
  offers: OfferCommonInfo[];
}

export const CitiesCardsList = ({offers}: CitiesCardsListProps) => {
  const [, setActiveCard] = useState<string>('');

  const handleMouseEnter = (id: string) => {
    setActiveCard(id);
  };

  const handleMouseLeave = () => {
    setActiveCard('');
  };

  return(
    <>
      {offers.map((offer)=>(
        <CitiesCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={() => handleMouseLeave()}
        />
      ))}
    </>);
};
