import { CitiesCardsList } from '../../components/citiesCardsList/Index';
import { Header } from '../../components/header/Index';
import { Map } from '../../components/map/Index';
import { useState } from 'react';
import { FilterContainer} from '../../components/mainPageCompnents/filterContainer/Index';
import { LocationsList } from '../../components/mainPageCompnents/locationsList/Index';
import { useAppSelector } from '../../hooks';
import { getCurrentCityOffers } from '../../utils';

const MainPage = () : JSX.Element => {
  const [selectedOfferId, setSelectedOfferId] = useState<string>('');
  const currentCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const currentCityOffers = getCurrentCityOffers(offers, currentCity);

  return(
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentCityOffers.length} places to stay in {currentCity}</b>
              <FilterContainer/>
              <CitiesCardsList
                offers={currentCityOffers}
                onListItemHover={setSelectedOfferId}
                cardType={'main'}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={currentCityOffers}
                  cityInfo={currentCityOffers[0]?.city}
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
