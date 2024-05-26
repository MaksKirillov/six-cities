import { Offer } from '../../types/offer';
import ListOfCards from '../elements/list-of-cards';
import ListOfCities from '../elements/list-of-cities';
import SortingBlock from '../elements/sorting-block';
import Map from '../map/map';
import { useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { getOfferComparator } from '../../utils/utils';


function MainScreen(): JSX.Element {
  const [offers, city] = useAppSelector((state) => [
    [...state.offerList]
      .sort(getOfferComparator(state.selectedSortType))
      .filter((offer: Offer) => offer.city.name === state.city.name),
    state.city.name,
  ]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/favourites"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="/login">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ListOfCities />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <SortingBlock />
              <ListOfCards offers={offers}/>
            </section>
            <div className="cities__right-section">
              <section className='cities__map map'>
                <Map points={offers} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
