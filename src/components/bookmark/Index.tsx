import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteStatusAction, fetchFavoriteOffersActions, fetchOffersActions } from '../../store/api-actions';
import { CardType } from '../../types/card';
import { AppPath, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';
import { HEIGHT_BOOKMARK, WIDTH_BOOKMARK } from './bookmark.constants';
import { OfferCommonInfo } from '../../types/offers';
import { loadCurrentOffer } from '../../store/actions';

type BookmarkProps = {
  cardType: 'offer' | CardType;
  offer: OfferCommonInfo;
}
export const Bookmark = ({cardType, offer} : BookmarkProps) => {
  const isOffer = cardType === 'offer';
  const {id, isFavorite} = offer;

  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();

  const currentOffer = useAppSelector((state) => state.currentOffer);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const comments = useAppSelector((state) => state.reviews);

  const handleBookmarkClick = () => {
    if(authStatus === AuthorizationStatus.NoAuth){
      navigate(AppPath.Login);
      return;
    }
    const status = isFavorite === false ? 1 : 0;
    dispatch(changeFavoriteStatusAction({id, status}))
      .then((value) => {
        if(value.meta.requestStatus === 'fulfilled'){
          if (cardType === 'main'){
            dispatch(fetchOffersActions());
          } else if (cardType === 'favorite'){
            dispatch(fetchFavoriteOffersActions());
          } else if (cardType === 'offer'){
            if(currentOffer){
              dispatch(loadCurrentOffer({currentOffer: {...currentOffer, isFavorite: !currentOffer?.isFavorite},nearbyOffers,comments}));
            }
          } else if (cardType === 'near'){
            if(currentOffer){
              dispatch(loadCurrentOffer({currentOffer: currentOffer.id === id ? {...currentOffer, isFavorite: !currentOffer?.isFavorite} : currentOffer,
                nearbyOffers: nearbyOffers.map((n)=>{
                  if(n.id === id){
                    return {...n, isFavorite: !isFavorite};
                  }
                  return n;
                }
                ), comments}));
            }
          }
        }
      });
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
