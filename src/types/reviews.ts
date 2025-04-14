import { User } from './user';

export type ReviewType = {
  id: string;
  date: string;
  user: ReviewUser;
  comment: string;
  rating: number;
}

export type ReviewUser = User

export type ReviewSubmit = Pick<ReviewType, 'comment' | 'rating'> & {id: string};
