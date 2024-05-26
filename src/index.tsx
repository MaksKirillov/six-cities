import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app';
import { Setting } from './const';
import { reviews } from './mocks/reviews';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        numberOfReviews= {Setting.NumberOfReviews}
        reviews= {reviews}
      />
    </Provider>
  </React.StrictMode>
);
