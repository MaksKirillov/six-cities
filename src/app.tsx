import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const';
import MainScreen from './components/pages/main-screen';
import LoginScreen from './components/pages/login-screen';
import FavouritesScreen from './components/pages/favourites-screen';
import OfferScreen from './components/pages/offer-screen';
import NotFoundScreen from './components/pages/not-found-screen';
import PrivateRoute from './components/private-route/private-route';
import { Offers } from './types/offer';
import { Reviews } from './types/review';

type AppScreenProps = {
  numberOfOffers: number;
  offers: Offers;
  numberOfReviews: number;
  reviews: Reviews;
}

function App({numberOfOffers, offers, numberOfReviews, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen numberOfOffers={numberOfOffers} offers={offers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favourites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavouritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen numberOfReviews={numberOfReviews} rewiews={reviews} numberOfOffers={numberOfOffers} offers={offers} />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
