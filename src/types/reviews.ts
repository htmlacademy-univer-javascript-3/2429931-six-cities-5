export type Reviews = Review[]

export type Review = {
  id: string;
  date: string;
  user: ReviewUser;
  comment: string;
  rating: number;
}

export type ReviewUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
