export type Offer = {
  id: number;
  city: string;
  src: string;
  price: number; // in euro
  rating: number; // 0% - 100%
  title: string;
  type: string; // Apartment
  isPremium: boolean;
  isFavourite: boolean;
  lat: number;
  lng: number;
};

export type Offers = Offer[];
