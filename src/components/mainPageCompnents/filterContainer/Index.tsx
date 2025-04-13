import { FilterList } from '../filterList/Index';
import { useAppSelector } from '../../../hooks';
import { useState } from 'react';

export const FilterContainer = () => {
  const activeSortingType = useAppSelector((state) => state.activeSortingType);
  const [isOpen, setIsOpen] = useState(false);

  return(
    <form className="places__sorting" action="#" method="get" onClick={()=>setIsOpen((pre)=>!pre)}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <FilterList
        isOpen={isOpen}
      />
    </form>
  );
};
