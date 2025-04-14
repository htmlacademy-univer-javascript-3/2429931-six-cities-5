import classNames from 'classnames';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeFavoriteStatusAction } from '../../store/api-actions';
import { CardType } from '../../types/card';

type BookmarkProps = {
  cardType: 'offer' | CardType;
  offer: {
    id: string;
    isFavorite: boolean;
  };
}
export const Bookmark = ({cardType, offer} : BookmarkProps) => {
  const isOffer = cardType === 'offer';
  const {id, isFavorite} = offer;

  const [isActive, setIsActive] = useState<boolean>(isFavorite);
  const dispatch = useAppDispatch();

  const handleBookmarkClick = () => {
    setIsActive((prev) => !prev);
    const status = isActive === false ? 1 : 0;
    dispatch(changeFavoriteStatusAction({id, status}));
  };

  return(
    <button
      className={
        classNames(
          isOffer ? 'offer__bookmark-button button' : 'place-card__bookmark-button button',
          {
            'place-card__bookmark-button--active': !isOffer && isActive,
            'offer__bookmark-button--active': isOffer && isActive,
          }
        )
      }
      type="button"
      onClick={handleBookmarkClick}
    >
      <svg className={isOffer ? 'offer__bookmark-icon' : 'place-card__bookmark-icon'} width={isOffer ? 31 : 18} height={isOffer ? 33 : 19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};
