import { Offers } from '../types/offer';

export const formatRating = (rate: number) => `${(rate / 5) * 100}%`;

export const getSortedOffers = (
  offers: Offers,
  sortType: string
): Offers | never => {
  switch (sortType) {
    case 'Popular':
      return offers;
    case 'Price: low to high':
      return offers.sort((offerA, offerB) => offerA.price - offerB.price);
    case 'Price: high to low':
      return offers.sort((offerA, offerB) => offerB.price - offerA.price);
    default:
      return offers.sort((offerA, offerB) => offerB.rating - offerA.rating);
  }
};
