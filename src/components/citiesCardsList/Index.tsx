import { useState } from 'react';
import {Offers} from '../../types/offers';
import CitiesCard from '../citiesCard/Index';

type CitiesCardsListProps = {
  offers: Offers;
}

export const CitiesCardsList = ({offers}: CitiesCardsListProps) => {
  const [, setActiveCard] = useState('');

  return(
    <>
      {offers.map((offer)=>(
        <CitiesCard
          key={offer.id}
          offer={offer}
          onActive={(id)=>{
            setActiveCard(id);
          }}
        />
      ))}
    </>);
};
