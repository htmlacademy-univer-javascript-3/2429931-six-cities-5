import MainPage from '../../pages/main/Index';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppPath, AuthorizationStatus } from '../../const';
import { LoginScreen } from '../../pages/login/Index';
import { FavoriteScreen } from '../../pages/favorites/Index';
import { OffersScreen } from '../../pages/offer/Index';
import { NotFoundScreen } from '../../pages/notFoundScreen/Index';
import { PrivateRoute } from '../privateRoute/Index';

type AppProps = {
  numberOffers: number;
}

const App = ({numberOffers}: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppPath.Main}
        element={
          <MainPage
            numberOffers={numberOffers}
          />
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
            authStatus={AuthorizationStatus.NoAuth}
          >
            <FavoriteScreen/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppPath.Offers}
        element={<OffersScreen/>}
      />
      <Route
        path='/*'
        element={<NotFoundScreen/>}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
