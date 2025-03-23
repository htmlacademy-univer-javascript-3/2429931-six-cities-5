import { useState } from 'react';
import {Offer, OffersPreviewInfo} from '../../types/offers';
import CitiesCard from '../citiesCard/Index';

type CitiesCardsListProps = {
  offers: Offer[];
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
          offer={offer as OffersPreviewInfo}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={() => handleMouseLeave()}
        />
      ))}
    </>);
};
