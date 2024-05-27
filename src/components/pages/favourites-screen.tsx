import Header from '../elements/header';
import { Offer } from '../../types/offer';
import FavouritesOffersBlock from '../elements/favourites-offers';
import { useAppSelector } from '../../hooks';

function FavouritesScreen(): JSX.Element {
  const [offers] = useAppSelector((state) => [
    [...state.offerList]
      .filter((offer: Offer) => offer.isFavourite === true),
  ]);
  const favourites = offers;
  const favouritesMap = favourites.reduce(
    (acc: Record<string, Offer[]>, place: Offer) => {
      const city = place.city.name;
      acc[city] = [...(acc[city] ?? []), place];
      return acc;
    },
    {}
  );

  return (
    <div className="page">
      <Header />

      {favourites.length > 0 ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.keys(favouritesMap).map((city) => (
                  <FavouritesOffersBlock
                    city={city}
                    key={favouritesMap[city][0].id}
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
