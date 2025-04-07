import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { sortOffers } from '../../../store/actions';
import { FilterOptionsDescriptionType } from '../../../types/filter';

type FilterItemProps = {
  option: FilterOptionsDescriptionType;
}
export const FilterItem = ({option}:FilterItemProps) => {
  const activeSortingType = useAppSelector((state) => state.activeSortingType);
  const classNamesActiveOption = classNames(
    'places__option',
    {'places__option--active': option === activeSortingType}
  );
  const dispatch = useAppDispatch();
  const hadleSortActiveTypeClick = () => {
    dispatch(sortOffers({activeSortingType: option}));
  };

  return(
    <li
      className={classNamesActiveOption}
      tabIndex={0}
      onClick={()=>hadleSortActiveTypeClick()}
    >
      {option}
    </li>
  );
};
