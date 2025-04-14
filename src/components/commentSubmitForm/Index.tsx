import {FormEvent, Fragment, useState } from 'react';
import { RATING_TITLES } from '../../const';
import { reviewSubmit } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';

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

  const {id} = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.isCommentDataLoading);

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target as HTMLInputElement & {name: FieldName};
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const handleReviewSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const comment = formData.comment;
    const rating = formData.rating;
    if(id){
      dispatch(reviewSubmit({id,comment,rating}));
    }
  };

  return(
    <form onSubmit={handleReviewSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map((rating) => (
          <Fragment key={rating}>
            <input disabled={isLoading} className="form__rating-input visually-hidden" name="rating" value={rating} id={`${rating}-stars`} type="radio"
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
      <textarea disabled={isLoading} className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={handleFieldChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button disabled={isLoading} className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
};
