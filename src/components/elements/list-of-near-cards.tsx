import OfferCard from './offer-card';
import { Offers } from '../../types/offer';

type ListOfNearCardsProps = {
  offers: Offers;
}

function ListOfNearCards({offers}: ListOfNearCardsProps): JSX.Element {

  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default ListOfNearCards;
