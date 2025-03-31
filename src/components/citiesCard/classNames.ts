import classNames from 'classnames';

export const getClassNamesForCard = (isCheckingCards: {[id:string]:boolean}) => {
  const {isMainCard, isNearCard, isFavoriteCard} = isCheckingCards;

  const classNamesCard = classNames(
    'place-card',
    {
      'cities__card' : isMainCard,
      'favorites__card': isFavoriteCard,
      'near-places__card places': isNearCard,
    }
  );

  const classNamesImgWrap = classNames(
    'place-card__image-wrapper',
    {
      'cities__image-wrapper': isMainCard,
      'favorites__image-wrapper': isFavoriteCard,
      'near-places__image-wrapper':isNearCard,
    },
  );

  const imgWidth = isFavoriteCard ? '150' : '260';
  const imgHeight = isFavoriteCard ? '110' : '200';

  const classNamesInfo = classNames(
    'place-card__info',
    {'favorites__card-info': isFavoriteCard},
  );

  const classNamesBookmark = classNames(
    'place-card__bookmark-button button',
    {'place-card__bookmark-button--active': isFavoriteCard},
  );

  return{
    classNamesCard,
    classNamesImgWrap,
    imgHeight,
    imgWidth,
    classNamesInfo,
    classNamesBookmark,
  };
};
