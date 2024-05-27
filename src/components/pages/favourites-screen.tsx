import Header from '../elements/header';
import FavouritesOffersBlock from '../elements/favourites-offers';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/offer-process/selectors';
import { getFavorites } from '../../store/favorite-process/selectors';

function FavouritesScreen(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const favourites = useAppSelector(getFavorites);
  const favouriteOffers = offers.filter((offer) => favourites.includes(offer.id));
  const favouriteCities = [...new Set(favouriteOffers.map((offer) => offer.city.name))];

  return (
    <div className="page">
      <Header />

      {favourites.length > 0 ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favouriteCities.map((city) => (
                  <FavouritesOffersBlock
                    city={city}
                    key={city}
                  />
                ))}
              </ul>
            </section>
          </div>
        </main>
      ) : (
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          </div>
        </main>
      )}
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavouritesScreen;
