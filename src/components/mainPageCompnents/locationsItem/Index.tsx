import classNames from 'classnames';
import { Link } from 'react-router-dom';

type LocationsItemProps = {
  city: string;
  isCurrentCity: boolean;
  onCityClick: () => void;
}

export const LocationsItem = ({city, isCurrentCity, onCityClick}: LocationsItemProps) => {
  const classNamesActiveCity = classNames(
    'locations__item-link tabs__item',
    {
      'tabs__item--active': isCurrentCity,
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
