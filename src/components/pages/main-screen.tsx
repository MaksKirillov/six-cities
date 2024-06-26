import ListOfCards from '../elements/list-of-cards';
import ListOfCities from '../elements/list-of-cities';
import SortingBlock from '../elements/sorting-block';
import Header from '../elements/header';
import Map from '../map/map';
import { useAppSelector } from '../../hooks';
import { getCity, getOffers } from '../../store/offer-process/selectors';
import { CardType } from '../../const';

function MainScreen(): JSX.Element {
  const city = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const cityOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ListOfCities />
          </section>
        </div>
        <div className="cities">
          {offers.length > 0 ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{cityOffers.length} places to stay in {city}</b>
                <SortingBlock />
                <ListOfCards offers={cityOffers} cardType={CardType.regular}/>
              </section>
              <div className="cities__right-section">
                <section className='cities__map map'>
                  <Map points={cityOffers.map((of) => of.location)} />
                </section>
              </div>
            </div>
          ) : (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in {city}
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
