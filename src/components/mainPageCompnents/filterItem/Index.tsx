import classNames from 'classnames';

type FilterItemProps = {
  option: string;
  isActive: boolean;
  onClick: () => void;
}
export const FilterItem = ({option, isActive, onClick}:FilterItemProps) => {
  const classNamesActiveOption = classNames(
    'places__option',
    {'places__option--active': isActive}
  );

  return(
    <li
      className={classNamesActiveOption}
      tabIndex={0}
      onClick={onClick}
    >
      {option}
    </li>
  );
};
