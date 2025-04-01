import { CitiesCardsList } from '../../components/citiesCardsList/Index';
import { OfferCommonInfo} from '../../types/offers';
import { Header } from '../../components/header/Index';
import { CITY } from '../../mocks/city';
import { Map } from '../../components/map/Index';
import { useState } from 'react';
import { FilterContainer} from '../../components/mainPageCompnents/filterContainer/Index';
import { LocationsList } from '../../components/mainPageCompnents/locationsList/Index';

type MainPageProps = {
  offers: OfferCommonInfo[];
}

const MainPage = ({offers}: MainPageProps) : JSX.Element => {
  const [selectedOfferId, setSelectedOfferId] = useState<string>('');
  const [currentCity, setCurrentCity] = useState('Amsterdam');

  return(
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList
              onLocationClick={(city)=>setCurrentCity(city)}
              currentCity={currentCity}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {currentCity}</b>
              <FilterContainer/>
              <CitiesCardsList
                offers={offers}
                onListItemHover={setSelectedOfferId}
                cardType={'main'}
              />
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
