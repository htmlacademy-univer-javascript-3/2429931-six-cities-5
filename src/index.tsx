import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/app/Index';
import { Provider } from 'react-redux';
import { store } from './store';
import { ErrorMessage } from './components/errorMessage/Index';
import { checkAuthAction } from './store/api-actions';

store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage/>
      <App/>
    </Provider>
  </React.StrictMode>
);
