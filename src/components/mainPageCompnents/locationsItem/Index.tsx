import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { CityNameType } from '../../../types/city';
import { useAppSelector } from '../../../hooks';

type LocationsItemProps = {
  city: CityNameType;
  onCityClick: () => void;
}

export const LocationsItem = ({city, onCityClick}: LocationsItemProps) => {
  const currentCity = useAppSelector((state) => state.city);

  const classNamesActiveCity = classNames(
    'locations__item-link tabs__item',
    {
      'tabs__item--active': city === currentCity,
    }
  );
  return(
    <li key={city} className="locations__item">
      <Link onClick={onCityClick} className={classNamesActiveCity} to="#">
        <span>{city}</span>
      </Link>
    </li>
  );
};
