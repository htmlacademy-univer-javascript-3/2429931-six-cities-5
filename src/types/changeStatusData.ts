import { StatusOffer } from '../components/bookmark/bookmark.constants';
import { CardType} from './card';

export type ChangeStatusData = {
  id: string;
  status: StatusOffer;
  cardType: CardType | 'offer';
}
