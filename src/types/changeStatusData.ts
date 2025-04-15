import { CardType, StatusOffer } from './card';

export type ChangeStatusData = {
  id: string;
  status: StatusOffer;
  cardType: CardType | 'offer';
}
