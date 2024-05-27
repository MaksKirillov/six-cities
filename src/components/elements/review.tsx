import { Review } from '../../types/review';

type ReviewProps = {
  review: Review;
}

function ReviewCard(props: ReviewProps): JSX.Element {
  const {review} = props;
  const { date, user, rating, comment } = review;

  return (
    <div className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: (rating / 5) * 100 }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={new Date(date).toDateString()}>
          {new Date(date).toDateString()}
        </time>
      </div>
    </div>
  );
}

export default ReviewCard;
