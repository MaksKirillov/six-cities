export type Offer = {
  id: number;
  src: string;
  price: number; // in euro
  rating: number; // 0% - 100%
  description: string;
  type: string; // Apartment
  isPremium: boolean;
  isFavourite: boolean;
};

export type Offers = Offer[];
