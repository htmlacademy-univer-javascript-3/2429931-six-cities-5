import MainPage from '../../pages/main/Index';
import {Routes, Route} from 'react-router-dom';
import { AppPath } from '../../const';
import { LoginScreen } from '../../pages/login/Index';
import { FavoriteScreen } from '../../pages/favorites/Index';
import { OfferScreen } from '../../pages/offer/Index';
import { NotFoundScreen } from '../../pages/notFoundScreen/Index';
import { PrivateRoute } from '../privateRoute/Index';
import { HistoryRouter } from '../historyRouter/Index';
import browserHistory from '../../services/browserHistory';

export const App = (): JSX.Element => (
  <HistoryRouter history={browserHistory}>
    <Routes>
      <Route
        path={AppPath.Main}
        element={
          <MainPage/>
        }
      />
      <Route
        path={AppPath.Login}
        element={<LoginScreen/>}
      />
      <Route
        path={AppPath.Favorites}
        element={
          <PrivateRoute>
            <FavoriteScreen/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppPath.Offer}
        element={
          <OfferScreen/>
        }
      />
      <Route
        path={AppPath.Other}
        element={<NotFoundScreen/>}
      />
    </Routes>
  </HistoryRouter>
);
