
import { Link } from 'react-router-dom';
import { FavoritesCardsList } from '../../components/favoritesCardsList/Index';
import { Header } from '../../components/header/Index';
import { OfferCommonInfo } from '../../types/offers';

type FavoriteScreenProps = {
  offers: OfferCommonInfo[];
}

export const FavoriteScreen = ({offers}: FavoriteScreenProps): JSX.Element => {
  const filterOffers = offers.filter((offer)=>offer.isFavorite);

  return(
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {filterOffers.length !== 0
              ?
              <FavoritesCardsList
                offers={filterOffers}
                cardType={'favorite'}
              />
              : null}
          </section>
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
