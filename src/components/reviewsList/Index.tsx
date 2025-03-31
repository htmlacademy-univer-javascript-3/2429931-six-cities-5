import { ReviewType } from '../../types/reviews';
import { Review } from '../review/Index';

type ReviewsListProps = {
  reviews: ReviewType[];
}

export const ReviewsList = ({reviews}: ReviewsListProps) => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <Review
        key={review.id}
        review={review}
      />
    ))}
  </ul>
);
