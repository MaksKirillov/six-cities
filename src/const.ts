export const cities = ['Paris', 'Amsterdam', 'Cologne', 'Brussels', 'Hamburg', 'Dusseldorf'];

export enum CardType {
  favourites = 'favorites__card',
  nearest = 'near-places__card',
  regular = 'cities__card',
}

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite'
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favourites = '/favourites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Offers = 'OFFERS',
  SelectedOffer = 'SELECTED_OFFER',
  User = 'USER',
  FavoriteProcess = 'FAVORITE',
  Error = 'ERROR'
}

export const TIMEOUT_SHOW_ERROR = 2000;
