import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { setSelectedPoint } from '../../store/action';
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

function OfferCard(props: OfferCardProps): JSX.Element {
  const {offer, cardType} = props;
  const {id, previewImage, price, rating, title, type, isPremium, isFavourite} = offer;
  const dispatch = useAppDispatch();

  return (
    <article
      className={`${cardType} place-card`}
      onPointerEnter={() => {
        if (cardType === CardType.regular) {
          dispatch(setSelectedPoint({ id }));
        }
      }}
      onPointerLeave={() => {
        if (cardType === CardType.regular) {
          dispatch(setSelectedPoint(null));
        }
      }}
      onClick={() => window.scrollTo(0, 0)}
    >
      {PremiumCard(isPremium)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${
              isFavourite ? 'place-card__bookmark-button--active' : ''
            } button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              {<use xlinkHref="#icon-bookmark"></use>}
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
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
