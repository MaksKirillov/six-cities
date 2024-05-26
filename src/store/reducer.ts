import {createReducer} from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { Offers } from '../types/offer';
import { changeCity,
  fillOfferList,
  setSelectedPoint,
  setSortType } from './action';

type StateType = {
  city: string;
  offerList: Offers;
  selectedSortType: string;
  selectedPoint: {
    title: string;
  } | null;
};

const initialState: StateType = {
  city: 'Paris',
  offerList: [],
  selectedSortType: 'Popular',
  selectedPoint: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(fillOfferList, (state) => {
      state.offerList = offers;
    })
    .addCase(setSortType, (state, { payload }) => {
      state.selectedSortType = payload;
    })
    .addCase(setSelectedPoint, (state, { payload }) => {
      state.selectedPoint = payload;
    });
});

export {reducer};
