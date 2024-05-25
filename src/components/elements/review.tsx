import { Review } from '../../types/review';

type ReviewProps = {
  review: Review;
}

function ReviewCard(props: ReviewProps): JSX.Element {
  const {review} = props;
  const {src, username, rating, text, date} = review;

  return (
    <div className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={src}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{username}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: rating }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">
          {date}
        </time>
      </div>
    </div>
  );
}

export default ReviewCard;
