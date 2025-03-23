import {Fragment, useState } from 'react';
import { RATING_TITLES } from '../../const';

type FormData = {
  comment: string;
  rating: number;
}

type FieldName = keyof FormData;

const ratings: number[] = [5,4,3,2,1];

export const CommentSubmitForm = () => {
  const [formData, setFormData] = useState<FormData>({
    comment: '',
    rating: 0,
  });

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target as HTMLInputElement & {name: FieldName};
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map((rating) => (
          <Fragment key={rating}>
            <input className="form__rating-input visually-hidden" name="rating" value={rating} id={`${rating}-stars`} type="radio"
              onChange={handleFieldChange}
            />
            <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={RATING_TITLES[rating - 1]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </ Fragment>
        ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={handleFieldChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
};
