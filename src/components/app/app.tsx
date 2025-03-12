import MainPage from '../../pages/main/main-page';

type AppProps = {
  numberOffers: number;
}

const App = ({numberOffers}: AppProps): JSX.Element => (
  <MainPage
    numberOffers={numberOffers}
  />
);

export default App;
