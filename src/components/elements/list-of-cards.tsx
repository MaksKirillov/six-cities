import CityCard from '../elements/city-card';
import { Offers } from '../../types/offer';
import { getSortedOffers } from '../../utils/utils';
import { useAppSelector } from '../../hooks';

type ListOfCardsProps = {
  offers: Offers;
}

function ListOfCards({ offers }: ListOfCardsProps): JSX.Element {
  const selectedSortType: string = useAppSelector(
    (state) => state.selectedSortType
  );

  return (
    <div className="cities__places-list places__list tabs__content">
      {getSortedOffers(offers, selectedSortType).map((offer) => (
        <CityCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default ListOfCards;

