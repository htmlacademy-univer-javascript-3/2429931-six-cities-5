import { FilterItem } from '../filterItem/Index';
import { FILTER_OPTIONS } from './filter.constants';

type FilterListProps = {
  selectedOption: string;
  onOptionClick: (option: string) => void;
};

const arrayFilterOptions = Object.entries(FILTER_OPTIONS);

export const FilterList = ({ selectedOption, onOptionClick }: FilterListProps) => (
  <ul className="places__options places__options--custom places__options--opened">
    {arrayFilterOptions.map(([key, value]) => (
      <FilterItem
        key={key}
        option={value}
        isActive={selectedOption === value}
        onClick={() => onOptionClick(value)}
      />
    ))}
  </ul>
);
