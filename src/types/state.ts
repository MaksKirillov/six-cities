import { AuthorizationStatus } from '../const.js';
import {store} from '../store/index.js';
import { Offers, Location, SelectedOffer } from './offer.js';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  email: string;
};

export type ErrorProcess = {
  error: null | string;
}

export type SelectedOfferProcess = {
  selectedOffer: SelectedOffer | undefined;
  isSelectedOfferDataLoading: boolean;
}

export type FavoriteProcess = {
  favorites: string[];
}

export type OfferProcess = {
  city: string;
  offers: Offers;
  filterType: string;
  selectedPoint: Location | undefined;
  isOffersDataLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
