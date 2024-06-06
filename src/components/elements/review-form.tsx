import { useState, ChangeEvent } from 'react';
import { getSelectedOffer } from '../../store/selected-offer-process/selectors';
import { postComment } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';

type Rating = {
  rating: number;
  comment: string;
}

function ReviewForm() {
  const [formState, setFormState] = useState<Rating>({
    rating: 0,
    comment: '',
  });

  const id = useAppSelector(getSelectedOffer)?.offerData.id;
  const dispatch = useAppDispatch();

  const onReviewChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormState((prevReview) => ({
      ...prevReview,
      comment: e.target.value,
    }));
  };

  const onRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      rating: Number(e.target.value),
    }));
  };

  const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(
      postComment({
        comment: formState.comment,
        rating: formState.rating,
        offerId: id,
      })
    );
    setFormState((prevState) => ({
      ...prevState,
      rating: 0,
      comment: ''
    }));
  };

  const isValid = () =>
    formState.comment.trim().length > 49;

  return (
    <form className="reviews__form form" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onChange={onRatingChange}
          checked={formState.rating === 5}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          onChange={onRatingChange}
          checked={formState.rating === 4}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          onChange={onRatingChange}
          checked={formState.rating === 3}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          onChange={onRatingChange}
          checked={formState.rating === 2}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          onChange={onRatingChange}
          checked={formState.rating === 1}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={formState.comment}
        onChange={onReviewChange}
        placeholder="YourReview"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid()}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
