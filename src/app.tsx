import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const';
import MainScreen from './components/pages/main-screen';
import LoginScreen from './components/pages/login-screen';
import FavouritesScreen from './components/pages/favourites-screen';
import OfferScreen from './components/pages/offer-screen';
import NotFoundScreen from './components/pages/not-found-screen';
import PrivateRoute from './components/private-route/private-route';
import LoadingScreen from './components/pages/loading-screen';
import { useAppSelector } from './hooks';

function App(): JSX.Element | null {
  const isOffersDataLoading = useAppSelector(
    (state) => state.isOffersDataLoading
  );

  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  if (
    authorizationStatus === AuthorizationStatus.Unknown ||
    isOffersDataLoading
  ) {
    return <LoadingScreen />;
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
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <FavouritesScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen />}
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
