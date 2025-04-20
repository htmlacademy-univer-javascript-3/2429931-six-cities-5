import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteStatusAction } from '../../store/api-actions';
import { CardType } from '../../types/card';
import { AppPath, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';
import { HEIGHT_BOOKMARK, StatusOffer, WIDTH_BOOKMARK } from './bookmark.constants';
import { OfferCommonInfo } from '../../types/offers';

type BookmarkProps = {
  cardType: 'offer' | CardType;
  offer: OfferCommonInfo;
}
export const Bookmark = ({cardType, offer} : BookmarkProps) => {
  const isOffer = cardType === 'offer';
  const {id} = offer;

  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);

  const isFavorite = favoriteOffers.some((f)=> f.id === id);

  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();

  const handleBookmarkClick = () => {
    if(authStatus === AuthorizationStatus.NoAuth){
      navigate(AppPath.Login);
      return;
    }
    const status = isFavorite === false ? StatusOffer.Add : StatusOffer.Delete;
    dispatch(changeFavoriteStatusAction({id, status, cardType}));
  };

  return(
    <button
      className={
        classNames(
          isOffer ? 'offer__bookmark-button button' : 'place-card__bookmark-button button',
          {
            'place-card__bookmark-button--active': !isOffer && isFavorite,
            'offer__bookmark-button--active': isOffer && isFavorite,
          }
        )
      }
      type="button"
      onClick={handleBookmarkClick}
    >
      <svg
        className={
          isOffer ? 'offer__bookmark-icon' : 'place-card__bookmark-icon'
        }
        width={isOffer ? WIDTH_BOOKMARK.offer : WIDTH_BOOKMARK.other}
        height={isOffer ? HEIGHT_BOOKMARK.offer : HEIGHT_BOOKMARK.other}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};
