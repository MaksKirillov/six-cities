import { NameSpace } from '../../const';
import { Offers } from '../../types/offer';
import { Location } from '../../types/offer';
import { State } from '../../types/state';

export const getFilterType = (state: State): string => state[NameSpace.Offers].filterType;
export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getCity = (state: State): string => state[NameSpace.Offers].city;
export const getSelectedPoint = (state: State): undefined | Location => state[NameSpace.Offers].selectedPoint;
export const getIsOfferDataLoading = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;

