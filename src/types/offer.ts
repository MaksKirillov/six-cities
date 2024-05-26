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
  id: number;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isPremium: boolean;
  isFavourite: boolean;
  rating: number;
};

export type Offers = Offer[];
