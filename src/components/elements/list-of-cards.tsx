import { memo, useMemo } from 'react';
import OfferCard from './offer-card';
import { Offers } from '../../types/offer';
import { CardType } from '../../const';
import { getFilterType } from '../../store/offer-process/selectors';
import { useAppSelector } from '../../hooks';
import { getOfferComparator } from '../../utils/utils';

type ListOfCardsProps = {
  offers: Offers | undefined;
  cardType: CardType;
}

function ListOfCardsComponent({ offers, cardType }: ListOfCardsProps): JSX.Element {
  const filterType = useAppSelector(getFilterType);
  return (
    <div className={`${cardType === CardType.regular ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list'}`}>
      {useMemo(() => getOfferComparator(offers, filterType), [offers, filterType])?.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          cardType={cardType}
        />
      ))}
    </div>
  );
}

const ListOfCards = memo(ListOfCardsComponent);

export default ListOfCards;

