import CityCard from '../elements/city-card';
import { Offers } from '../../types/offer';

type ListOfCardsProps = {
  numberOfOffers: number;
  offers: Offers;
}

function ListOfCards({numberOfOffers, offers}: ListOfCardsProps): JSX.Element {
  const cardList = [];
  for (let i = 0; i < numberOfOffers; i++) {
    cardList.push(<li key = {i}><CityCard offer={offers[i]}/></li>);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {cardList}
    </div>
  );
}

export default ListOfCards;
