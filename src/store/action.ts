import {createAction} from '@reduxjs/toolkit';
import { City, Offers } from '../types/offer';
import { OfferData } from '../types/offer-data';
import { Review } from '../types/review';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<City>('changeCity');
export const setSortType = createAction<string>('setSortType');
export const setSelectedPoint = createAction<{ id: string } | null>('setSelectedPoint');
export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');
export const loadOffers = createAction<Offers>('loadOffers');
export const setError = createAction<string | null>('setError');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('setAuthorizationStatus');
export const loadOfferData = createAction<OfferData>('loadOfferData');
export const addReview = createAction<Review>('addReview');
