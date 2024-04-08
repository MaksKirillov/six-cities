export type Offer = {
  src: string;
  price: number; // in euro
  rating: number; // 0% - 100%
  description: string;
  type: string; // Apartment
};

export type Offers = Offer[];
