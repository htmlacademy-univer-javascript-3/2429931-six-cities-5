import MainPage from '../../pages/main/Index';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppPath} from '../../const';
import { LoginScreen } from '../../pages/login/Index';
import { FavoriteScreen } from '../../pages/favorites/Index';
import { OfferScreen } from '../../pages/offer/Index';
import { NotFoundScreen } from '../../pages/notFoundScreen/Index';
import { PrivateRoute } from '../privateRoute/Index';
import { OfferCommonInfo } from '../../types/offers';

type AppProps = {
  offers: OfferCommonInfo[];
}

const App = ({offers}: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppPath.Main}
        element={
          <MainPage
            offers={offers}
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
            authStatus
          >
            <FavoriteScreen offers={offers}/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppPath.Offer}
        element={<OfferScreen/>}
      />
      <Route
        path='/*'
        element={<NotFoundScreen/>}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
