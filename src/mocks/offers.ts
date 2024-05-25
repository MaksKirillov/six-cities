import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: 1,
    src: 'img/apartment-01.jpg',
    price: 140, // in euro
    rating: 60, // 0 - 100
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isPremium: false,
    isFavourite: true
  },
  {
    id: 2,
    src: 'img/apartment-02.jpg',
    price: 50, // in euro
    rating: 25, // 0 - 100
    description: 'Cozy, Nice, warm big bed apartment',
    type: 'Apartment',
    isPremium: false,
    isFavourite: false
  },
  {
    id: 3,
    src: 'img/apartment-03.jpg',
    price: 200, // in euro
    rating: 100, // 0 - 100
    description: 'Warm, nice, cozy,  big bed apartment',
    type: 'Apartment',
    isPremium: true,
    isFavourite: false
  },
  {
    id: 4,
    src: 'img/apartment-01.jpg',
    price: 180, // in euro
    rating: 20, // 0 - 100
    description: 'Nice, warm, cozy big bed apartment',
    type: 'Apartment',
    isPremium: true,
    isFavourite: false
  },
];
