import MainPage from '../../pages/main/Index';
import {Routes, Route} from 'react-router-dom';
import { AppPath, AuthorizationStatus } from '../../const';
import { LoginScreen } from '../../pages/login/Index';
import { FavoriteScreen } from '../../pages/favorites/Index';
import { OfferScreen } from '../../pages/offer/Index';
import { NotFoundScreen } from '../../pages/notFoundScreen/Index';
import { PrivateRoute } from '../privateRoute/Index';
import { HistoryRouter } from '../historyRouter/Index';
import browserHistory from '../../services/browserHistory';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchFavoriteOffersActions } from '../../store/api-actions';

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    if(authStatus === AuthorizationStatus.Auth){
      dispatch(fetchFavoriteOffersActions());
    }
  }, [authStatus, dispatch]);

  return(
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
};
