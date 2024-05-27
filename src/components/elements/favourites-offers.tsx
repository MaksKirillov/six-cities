import { Offer } from '../../types/offer';
import ListOfCards from './list-of-cards';
import { useAppSelector } from '../../hooks';

type FavouritesOffersBlockProps = {
  city: string;
}

function FavouritesOffersBlock({ city }: FavouritesOffersBlockProps): JSX.Element {
  const [offers] = useAppSelector((state) => [
    [...state.offerList]
      .filter((offer: Offer) => offer.city.name === state.city.name)
      .filter((offer: Offer) => offer.isFavourite === true),
  ]);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <ListOfCards offers={offers}/>
      </div>
    </li>
  );
}

export default FavouritesOffersBlock;
