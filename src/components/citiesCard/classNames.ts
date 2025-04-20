import classNames from 'classnames';
import { CARD_IMG_SIZE, CARD_STYLES, CARD_STYLES_IMG_WRAP, CARD_STYLES_INFO } from './card.constants';
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

  const imgWidth = (cardType === 'favorite') ? CARD_IMG_SIZE.width.favorite : CARD_IMG_SIZE.width.other;
  const imgHeight = (cardType === 'favorite') ? CARD_IMG_SIZE.height.favorite : CARD_IMG_SIZE.height.other;

  const classNamesInfo = classNames(
    'place-card__info',
    CARD_STYLES_INFO[cardType]
  );

  const classNamesBookmark = classNames(
    'place-card__bookmark-button button',
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
