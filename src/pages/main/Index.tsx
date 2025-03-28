import { CitiesCardsList } from '../../components/citiesCardsList/Index';
import { OfferCommonInfo} from '../../types/offers';
import { Header } from '../../components/header/Index';
import { CITIES } from '../../const';
import { Link } from 'react-router-dom';
import { CITY } from '../../mocks/city';
import { Map } from '../../components/map/Index';
import { useState } from 'react';

type MainPageProps = {
  offers: OfferCommonInfo[];
}

const MainPage = ({offers}: MainPageProps) : JSX.Element => {
  const [selectedOfferId, setSelectedOfferId] = useState<string>('');

  const handleListItemHover = (listItemId: string): void => {
    setSelectedOfferId(listItemId);
  };

  return(
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) =>(
                <li key={city} className="locations__item">
                  <Link className="locations__item-link tabs__item" to="#">
                    <span>{city}</span>
                  </Link>
                </li>))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <CitiesCardsList
                  offers={offers}
                  onListItemHover={handleListItemHover}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={CITY}
                  offers={offers}
                  selectedOfferId={selectedOfferId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
