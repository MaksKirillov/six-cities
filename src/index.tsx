import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app';
import { reviews } from './mocks/reviews';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { fetchOffersAction } from './store/api-action';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App
        reviews= {reviews}
      />
    </Provider>
  </React.StrictMode>
);
