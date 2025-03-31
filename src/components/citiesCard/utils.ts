import { KIND_CARD } from '../../const';


export const checkCard = (kindCard: string) => (
  {
    isMainCard: kindCard === KIND_CARD.main,
    isFavoriteCard: kindCard === KIND_CARD.favorite,
    isNearCard: kindCard === KIND_CARD.near,
  }
);

