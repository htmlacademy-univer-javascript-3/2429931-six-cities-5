import { ReviewType, ReviewUser } from '../../types/reviews';
import { takeNewDate } from '../../utils';

type ReviewProps = {
  review: ReviewType;
}

export const Review = ({review}: ReviewProps) => {
  const {date, user, comment, rating} = review;
  const {name, avatarUrl}: ReviewUser = user;
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt={name} />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${20 * rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{takeNewDate(date)}</time>
      </div>
    </li>
  );
};
