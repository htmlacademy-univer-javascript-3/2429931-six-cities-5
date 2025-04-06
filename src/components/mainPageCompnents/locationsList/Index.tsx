import { CITIES } from '../../../const';
import { useAppDispatch } from '../../../hooks';
import { changeCity } from '../../../store/actions';
import { CityNameType } from '../../../types/city';
import { LocationsItem } from '../locationsItem/Index';

export const LocationsList = () => {
  const dispatch = useAppDispatch();

  const handleLocationClick = (cityName: CityNameType) => {
    dispatch(changeCity({cityName}));
  };

  return(
    <ul className="locations__list tabs__list">
      {CITIES.map((city) =>(
        <LocationsItem
          key={city}
          city={city}
          onCityClick={()=>handleLocationClick(city)}
        />
      ))}
    </ul>
  );
};
