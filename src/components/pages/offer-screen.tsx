import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthorizationStatus } from '../../const';
import { fetchOfferDataAction } from '../../store/api-action';
import ReviewForm from '../elements/review-form';
import ListOfReviews from '../elements/list-of-reviews';
import ListOfNearCards from '../elements/list-of-near-cards';
import Header from '../elements/header';
import Map from '../map/map';
import { useAppSelector, useAppDispatch } from '../../hooks';

function OfferScreen(): JSX.Element {
  const { id } = useParams();

  const isAuthed: boolean =
    useAppSelector((state) => state.authorizationStatus) ===
    AuthorizationStatus.Auth;

  const { offerInfo, nearestOffers, reviews } = useAppSelector(
    ({ currentOffer }) => ({
      offerInfo: currentOffer.offerInfo,
      nearestOffers: currentOffer.nearestOffers,
      reviews: currentOffer.reviews,
    })
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferDataAction({ id: id ?? '' }));
  }, [dispatch, id]);

  if (!offerInfo) {
    return <div className="container">Загрузка...</div>;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offerInfo.images.map((url) => (
                <div className="offer__image-wrapper" key={url}>
                  <img className="offer__image" src={url} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offerInfo.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offerInfo.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: (offerInfo.rating / 5) * 100 } } />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offerInfo.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offerInfo.type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offerInfo.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offerInfo.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{offerInfo.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offerInfo.goods.map((advantage) => (
                    <li className="offer__inside-item" key={advantage}>
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper ${
                      offerInfo.host.isPro ? 'offer__avatar-wrapper--pro' : ''
                    } user__avatar-wrapper`}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={offerInfo.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offerInfo.host.name}</span>
                  {offerInfo.host.isPro && (<span className="offer__user-status">Pro</span>)}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{offerInfo.description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ListOfReviews reviews={reviews}/>
                {isAuthed && <ReviewForm id={id!} />}
              </section>
            </div>
          </div>
          <section className='cities__map map'>
            <Map points={[...nearestOffers.slice(0, 3), offerInfo]} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <ListOfNearCards offers={nearestOffers.slice(0, 3)} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
