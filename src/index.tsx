import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { Setting } from './const';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      numberOfOffers = {Setting.NumberOfOffers}
      offers= {offers}
      numberOfReviews= {Setting.NumberOfReviews}
      reviews= {reviews}
    />
  </React.StrictMode>
);
