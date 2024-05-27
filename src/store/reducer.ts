import {createReducer} from '@reduxjs/toolkit';
import { City, Offers, ExtendedOffer } from '../types/offer';
import { Review } from '../types/review';
import { AuthorizationStatus } from '../const';
import { changeCity,
  setSelectedPoint,
  setSortType,
  loadOffers,
  setError,
  setOffersDataLoadingStatus,
  setAuthorizationStatus,
  addReview,
  loadOfferData } from './action';

type StateType = {
  city: City;
  offerList: Offers;
  selectedSortType: string;
  selectedPoint: {
    id: string;
  } | null;
  isOffersDataLoading: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  currentOffer: {
    offerInfo: ExtendedOffer | null;
    nearestOffers: Offers;
    reviews: Review[];
  };
};

const initialState: StateType = {
  city: {
    name: 'Paris',
    location: {
      latitude: 48.864716,
      longitude: 2.349014,
      zoom: 10,
    },
  },
  offerList: [],
  selectedSortType: 'Popular',
  selectedPoint: null,
  isOffersDataLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  currentOffer: {
    offerInfo: null,
    nearestOffers: [],
    reviews: [],
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(loadOffers, (state, { payload }) => {
      state.offerList = payload;
    })
    .addCase(setSortType, (state, { payload }) => {
      state.selectedSortType = payload;
    })
    .addCase(setSelectedPoint, (state, { payload }) => {
      state.selectedPoint = payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadOfferData, (state, { payload }) => {
      state.selectedPoint = { id: payload.offerInfo.id };
      state.currentOffer = { ...payload };
    })
    .addCase(addReview, (state, { payload }) => {
      state.currentOffer.reviews = [...state.currentOffer.reviews, payload];
    });
});

export {reducer};
