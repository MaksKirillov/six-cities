import CityCard from '../elements/city-card';
import { Offers } from '../../types/offer';
import { getSortedOffers } from '../../utils/utils';
import { useAppSelector } from '../../hooks';

type ListOfNearCardsProps = {
  offers: Offers;
}

function ListOfNearCards({offers}: ListOfNearCardsProps): JSX.Element {
  const selectedSortType: string = useAppSelector(
    (state) => state.selectedSortType
  );

  return (
    <div className="near-places__list places__list">
      {getSortedOffers(offers, selectedSortType).map((offer) => (
        <CityCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default ListOfNearCards;
