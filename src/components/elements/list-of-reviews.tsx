import ReviewCard from './review';
import { Reviews } from '../../types/review';

type ListOfReviewsProps = {
  numberOfReviews: number;
  rewiews: Reviews;
}

function ListOfReviews({numberOfReviews, rewiews}: ListOfReviewsProps): JSX.Element {
  const reviewList = [];
  for (let i = 0; i < numberOfReviews; i++) {
    reviewList.push(<li key={i}><ReviewCard review={rewiews[i]}/></li>);
  }

  return (
    <ul className="reviews__list">
      {reviewList}
    </ul>
  );
}

export default ListOfReviews;
