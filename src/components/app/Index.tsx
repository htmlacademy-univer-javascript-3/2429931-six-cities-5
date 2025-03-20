import MainPage from '../../pages/main/Index';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppPath} from '../../const';
import { LoginScreen } from '../../pages/login/Index';
import { FavoriteScreen } from '../../pages/favorites/Index';
import { OfferScreen } from '../../pages/offer/Index';
import { NotFoundScreen } from '../../pages/notFoundScreen/Index';
import { PrivateRoute } from '../privateRoute/Index';
import { Offers } from '../../types/offers';

type AppProps = {
  numberOffers: number;
  offers: Offers;
}

const App = ({numberOffers, offers}: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppPath.Main}
        element={
          <MainPage
            numberOffers={numberOffers}
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
