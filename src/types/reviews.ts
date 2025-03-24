import { User } from './user';

export type Review = {
  id: string;
  date: string;
  user: ReviewUser;
  comment: string;
  rating: number;
}

export type ReviewUser = User
