import {createReducer} from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { Offers } from '../types/offer';
import { changeCity, fillOfferList } from './action';

type StateType = {
  city: string;
  offerList: Offers;
};

const initialState: StateType = {
  city: 'Paris',
  offerList: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(fillOfferList, (state) => {
      state.offerList = offers;
    });
});

export {reducer};
