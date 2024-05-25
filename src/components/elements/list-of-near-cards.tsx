import CityCard from '../elements/city-card';
import { Offers } from '../../types/offer';

type ListOfNearCardsProps = {
  numberOfOffers: number;
  offers: Offers;
}

function ListOfNearCards({numberOfOffers, offers}: ListOfNearCardsProps): JSX.Element {
  const cardList = [];
  for (let i = 0; i < numberOfOffers; i++) {
    cardList.push(<li key = {i}><CityCard offer={offers[i]}/></li>);
  }

  return (
    <div className="near-places__list places__list">
      {cardList}
    </div>
  );
}

export default ListOfNearCards;
