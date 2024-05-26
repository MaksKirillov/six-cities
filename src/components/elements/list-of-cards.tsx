import OfferCard from './offer-card';
import { Offers } from '../../types/offer';

type ListOfCardsProps = {
  offers: Offers;
}

function ListOfCards({ offers }: ListOfCardsProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default ListOfCards;

