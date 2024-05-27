import { Route, Routes} from 'react-router-dom';
import { AppRoute } from './const';
import { useEffect } from 'react';
import MainScreen from './components/pages/main-screen';
import LoginScreen from './components/pages/login-screen';
import FavouritesScreen from './components/pages/favourites-screen';
import OfferScreen from './components/pages/offer-screen';
import NotFoundScreen from './components/pages/not-found-screen';
import PrivateRoute from './components/private-route/private-route';
import LoadingScreen from './components/pages/loading-screen';
import { useAppSelector } from './hooks';
import { store } from './store/index.ts';
import { getIsOfferDataLoading } from './store/offer-process/selectors';
import { getAuthorizationStatus } from './store/user-process/selectors';
import { getAuthCheckedStatus } from './store/user-process/selectors';
import { fetchFavoritesAction } from './store/api-action';
import HistoryRouter from './components/history-route/history-route.tsx';
import browserHistory from './browser-history.ts';

function App(): JSX.Element | null {
  const isOffersDataLoading = useAppSelector(getIsOfferDataLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);

  useEffect(() => {
    store.dispatch(fetchFavoritesAction());
  }, [authorizationStatus]);

  if (!isAuthChecked || isOffersDataLoading) {
    return <LoadingScreen />;
  }

  return (
    <HistoryRouter history={browserHistory}>
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
            <PrivateRoute>
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
    </HistoryRouter>
  );
}

export default App;
