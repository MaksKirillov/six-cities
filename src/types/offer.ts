export type Offer = {
  id: number;
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
