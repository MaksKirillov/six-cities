import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const';
import MainScreen from './components/pages/main-screen';
import LoginScreen from './components/pages/login-screen';
import FavouritesScreen from './components/pages/favourites-screen';
import OfferScreen from './components/pages/offer-screen';
import NotFoundScreen from './components/pages/not-found-screen';
import PrivateRoute from './components/private-route/private-route';
import { useAppDispatch, useAppSelector } from './hooks';
import { fillOfferList } from './store/action';
import { Offers } from './types/offer';
import { Reviews } from './types/review';

type AppScreenProps = {
  numberOfReviews: number;
  reviews: Reviews;
}

function App({numberOfReviews, reviews}: AppScreenProps): JSX.Element | null {
  const offers: Offers = useAppSelector((state) => state.offerList);
  const dispatch = useAppDispatch();
  dispatch(fillOfferList());

  if (offers.length === 0) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
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
          element={<OfferScreen numberOfReviews={numberOfReviews} rewiews={reviews} numberOfOffers={offers.length} offers={offers} />}
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
