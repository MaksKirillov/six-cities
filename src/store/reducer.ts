import {createReducer} from '@reduxjs/toolkit';
import { City, Offers } from '../types/offer';
import { AuthorizationStatus } from '../const';
import { changeCity,
  setSelectedPoint,
  setSortType,
  loadOffers,
  setError,
  setOffersDataLoadingStatus,
  setAuthorizationStatus } from './action';

type StateType = {
  city: City;
  offerList: Offers;
  selectedSortType: string;
  selectedPoint: {
    title: string;
  } | null;
  isOffersDataLoading: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
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
  authorizationStatus: AuthorizationStatus.Unknown
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
    });
});

export {reducer};
