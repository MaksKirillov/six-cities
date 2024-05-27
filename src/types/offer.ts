export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isPremium: boolean;
  isFavourite: boolean;
  rating: number;
}

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type ExtendedOffer = Omit<Offer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  maxAdults: number;
  images: string[];
}

export type Offers = Offer[];
