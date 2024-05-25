import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: 1,
    src: 'img/apartment-01.jpg',
    price: 140, // in euro
    rating: 60, // 0 - 100
    title: 'Cool apartment',
    type: 'Apartment',
    isPremium: false,
    isFavourite: true,
    lat: 52.3909553943508,
    lng: 4.85309666406198,
  },
  {
    id: 2,
    src: 'img/apartment-02.jpg',
    price: 50, // in euro
    rating: 25, // 0 - 100
    title: 'Nice apartment',
    type: 'Apartment',
    isPremium: false,
    isFavourite: false,
    lat: 52.3609553943508,
    lng: 4.85309666406198,
  },
  {
    id: 3,
    src: 'img/apartment-03.jpg',
    price: 200, // in euro
    rating: 100, // 0 - 100
    title: 'Warm apartment',
    type: 'Apartment',
    isPremium: true,
    isFavourite: false,
    lat: 52.3909553943508,
    lng: 4.929309666406198,
  },
  {
    id: 4,
    src: 'img/apartment-01.jpg',
    price: 180, // in euro
    rating: 20, // 0 - 100
    title: 'Big bed apartment',
    type: 'Apartment',
    isPremium: true,
    isFavourite: false,
    lat: 52.3809553943508,
    lng: 4.939309666406198,
  },
];
