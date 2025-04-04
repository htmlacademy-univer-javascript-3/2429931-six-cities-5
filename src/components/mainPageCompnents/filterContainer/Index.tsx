import { useState } from 'react';
import { FilterList } from '../filterList/Index';

export const FilterContainer = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Popular');

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <FilterList
        selectedOption={selectedOption}
        onOptionClick={(option: string) => setSelectedOption(option)}
      />
    </form>
  );
};
