import { CITIES } from '../../../const';
import { LocationsItem } from '../locationsItem/Index';

type LocationsListProps = {
  onLocationClick: (city: string) => void;
  currentCity: string;
}
export const LocationsList = ({currentCity, onLocationClick}: LocationsListProps) => (
  <ul className="locations__list tabs__list">
    {CITIES.map((city) =>(
      <LocationsItem
        key={city}
        city={city}
        isCurrentCity={currentCity === city}
        onCityClick={()=>onLocationClick(city)}
      />
    ))}
  </ul>
);
