import {OfferCommonInfo} from '../../types/offers';
import CitiesCard from '../citiesCard/Index';

type CitiesCardsListProps = {
  offers: OfferCommonInfo[];
  onListItemHover: (id: string) => void;
}

export const CitiesCardsList = ({offers, onListItemHover}: CitiesCardsListProps) => {
  // const [activeCard, setActiveCard] = useState<string>('');

  const handleMouseToggle = (id: string | null) => {
    // setActiveCard(id || '');
    onListItemHover(id || '');
  };

  return(
    <>
      {offers.map((offer)=>(
        <CitiesCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => handleMouseToggle(offer.id)}
          onMouseLeave={() => handleMouseToggle(null)}
        />
      ))}
    </>);
};
