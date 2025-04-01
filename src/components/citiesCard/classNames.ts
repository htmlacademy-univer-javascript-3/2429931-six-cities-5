import classNames from 'classnames';
import { CARD_STYLES, CARD_STYLES_BOOKMARK, CARD_STYLES_IMG_WRAP, CARD_STYLES_INFO } from './card.constants';
import { CardType } from '../../types/card';

export const getClassNamesForCard = (cardType: CardType) => {
  const classNamesCard = classNames(
    'place-card',
    CARD_STYLES[cardType]
  );

  const classNamesImgWrap = classNames(
    'place-card__image-wrapper',
    CARD_STYLES_IMG_WRAP[cardType]
  );

  const imgWidth = (cardType === 'favorite') ? '150' : '260';
  const imgHeight = (cardType === 'favorite') ? '110' : '200';

  const classNamesInfo = classNames(
    'place-card__info',
    CARD_STYLES_INFO[cardType]
  );

  const classNamesBookmark = classNames(
    'place-card__bookmark-button button',
    CARD_STYLES_BOOKMARK[cardType]
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
