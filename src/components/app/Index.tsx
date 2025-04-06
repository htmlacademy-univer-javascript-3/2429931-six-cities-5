import MainPage from '../../pages/main/Index';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppPath } from '../../const';
import { LoginScreen } from '../../pages/login/Index';
import { FavoriteScreen } from '../../pages/favorites/Index';
import { OfferScreen } from '../../pages/offer/Index';
import { NotFoundScreen } from '../../pages/notFoundScreen/Index';
import { PrivateRoute } from '../privateRoute/Index';
import { reviews } from '../../mocks/reviews';

export const App = (): JSX.Element => (
  <BrowserRouter>
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
          <PrivateRoute
            authStatus
          >
            <FavoriteScreen/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppPath.Offer}
        element={
          <OfferScreen
            reviews={reviews}
          />
        }
      />
      <Route
        path='/*'
        element={<NotFoundScreen/>}
      />
    </Routes>
  </BrowserRouter>
);
