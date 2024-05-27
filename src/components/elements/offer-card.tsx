import { memo } from 'react';
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavorite, fetchOfferAction } from '../../store/api-action';
import { changeSelectedPoint } from '../../store/offer-process/offer-process';
import { getFavorites } from '../../store/favorite-process/selectors';
import { CardType } from '../../const';

type OfferCardProps = {
  offer: Offer;
  cardType: CardType;
}

function PremiumCard (isPremium: boolean): JSX.Element {
  if (isPremium) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}

function OfferCardComponent(props: OfferCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {offer, cardType} = props;
  const {id, previewImage, price, rating, title, type, isPremium} = offer;

  const favorites = useAppSelector(getFavorites);

  const handleOfferTitleClick = () => {
    dispatch(fetchOfferAction(offer.id));
  };

  const handleAddFavorite = () => {
    dispatch(changeFavorite({
      favorites: favorites,
      offerId: offer.id,
      status: favorites.includes(offer.id) ? 0 : 1
    }));
  };

  const handleOnMouseEnter = () => {
    if (cardType === CardType.regular) {
      dispatch(changeSelectedPoint(offer.location));
    }
  };

  const handleOnMouseLeave = () => {
    if (cardType === CardType.regular) {
      dispatch(changeSelectedPoint(undefined));
    }
  };

  return (
    <article
      className={`${cardType} place-card`}
      onPointerEnter={handleOnMouseEnter}
      onPointerLeave={handleOnMouseLeave}
    >
      {PremiumCard(isPremium)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <img
          className="place-card__image"
          src={previewImage}
          width={260}
          height={200}
          alt="Place image"
        />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${
              favorites.includes(offer.id) ? 'place-card__bookmark-button--active' : ''
            } button`}
            type="button"
            onClick={handleAddFavorite}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: (rating / 5) * 100 }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={handleOfferTitleClick}>
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

const OfferCard = memo(OfferCardComponent);

export default OfferCard;
