
import { Link } from 'react-router-dom';
import { FavoritesCardsList } from '../../components/favoritesCardsList/Index';
import { Header } from '../../components/header/Index';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LoadingScreen } from '../loadingScreen/Index';
import { useEffect } from 'react';
import { fetchFavoriteOffersActions } from '../../store/api-actions';

export const FavoriteScreen = (): JSX.Element => {
  const isFavoriteOffersDataLoading = useAppSelector((state) => state.isFavoriteOffersDataLoading);
  const offers = useAppSelector((state) => state.favoriteOffers);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteOffersActions());
  },[dispatch]);

  if (isFavoriteOffersDataLoading){
    return <LoadingScreen/>;
  }

  return(
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {offers.length !== 0
            ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesCardsList
                offers={offers}
                cardType={'favorite'}
              />
            </section>
            :
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};
