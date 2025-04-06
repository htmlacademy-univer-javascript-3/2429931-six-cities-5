import { FilterItem } from '../filterItem/Index';
import { FILTER_OPTIONS } from '../../../const';
import classNames from 'classnames';
type FilterListProps = {
  isOpen: boolean;
}
const arrayFilterOptions = Object.entries(FILTER_OPTIONS);

export const FilterList = ({isOpen}:FilterListProps) => (
  <ul className={
    classNames(
      'places__options places__options--custom',
      {'places__options--opened': isOpen},
    )
  }
  >
    {arrayFilterOptions.map(([key, value]) => (
      <FilterItem
        key={key}
        option={value}
      />
    ))}
  </ul>
);
