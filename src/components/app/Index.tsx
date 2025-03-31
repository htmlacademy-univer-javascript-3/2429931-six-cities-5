import MainPage from '../../pages/main/Index';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { AppPath, KIND_CARD} from '../../const';
import { LoginScreen } from '../../pages/login/Index';
import { FavoriteScreen } from '../../pages/favorites/Index';
import { OfferScreen } from '../../pages/offer/Index';
import { NotFoundScreen } from '../../pages/notFoundScreen/Index';
import { PrivateRoute } from '../privateRoute/Index';
import { OfferCommonInfo } from '../../types/offers';
import { reviews } from '../../mocks/reviews';
import { checkCard } from '../citiesCard/utils';

type AppProps = {
  offers: OfferCommonInfo[];
}

export const App = ({offers}: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppPath.Main}
        element={
          <MainPage
            offers={offers}
            isCheckingCards={checkCard(KIND_CARD.main)}
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
            <FavoriteScreen
              offers={offers}
              isCheckingCards={checkCard(KIND_CARD.favorite)}
            />
          </PrivateRoute>
        }
      />
      <Route
        path={AppPath.Offer}
        element={
          <OfferScreen
            offers={offers}
            reviews={reviews}
            isCheckingCards={checkCard(KIND_CARD.near)}
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
