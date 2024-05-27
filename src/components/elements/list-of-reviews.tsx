import ReviewCard from './review';
import { Reviews } from '../../types/review';

type ListOfReviewsProps = {
  reviews: Reviews;
}

function ListOfReviews({reviews}: ListOfReviewsProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews
        .slice()
        .sort((reviewA, reviewB) => {
          const dateA = new Date(reviewA.date).getTime();
          const dateB = new Date(reviewB.date).getTime();

          return dateB - dateA;
        })
        .slice(0, 10)
        .map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
    </ul>
  );
}

export default ListOfReviews;
