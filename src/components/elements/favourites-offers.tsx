import { Offer } from '../../types/offer';
import ListOfCards from './list-of-cards';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/offer-process/selectors';
import { CardType } from '../../const';
import { Link } from 'react-router-dom';

type FavouritesOffersBlockProps = {
  city: string;
}

function FavouritesOffersBlock({ city }: FavouritesOffersBlockProps): JSX.Element {
  const offers = useAppSelector(getOffers)
    .filter((offer: Offer) => offer.city.name === city)
    .filter((offer: Offer) => offer.isFavorite === true);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to="/">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <ListOfCards offers={offers} cardType={CardType.favourites} />
      </div>
    </li>
  );
}

export default FavouritesOffersBlock;
