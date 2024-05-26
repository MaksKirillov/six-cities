import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<string>('changeCity');
export const fillOfferList = createAction('fillOfferList');
export const setSortType = createAction<string>('setSortType');
export const setSelectedPoint = createAction<{ title: string } | null>(
  'setSelectedPoint'
);
