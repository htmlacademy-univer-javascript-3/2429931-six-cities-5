import { CommentSubmitForm } from '../../components/commentSubmitForm/Index';
import { Header } from '../../components/header/Index';
import { ReviewsList } from '../../components/reviewsList/Index';
import { Map } from '../../components/map/Index';
import { CitiesCardsList } from '../../components/citiesCardsList/Index';
import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCurrentOfferActions } from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import { LoadingScreen } from '../loadingScreen/Index';
import classNames from 'classnames';
import { AuthorizationStatus } from '../../const';
import { extractCommonInfo } from '../../utils';
import { Bookmark } from '../../components/bookmark/Index';

export const OfferScreen = (): JSX.Element => {
  const [selectedOfferId, setSelectedOfferId] = useState<string>('');

  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.currentOffer);
  const nearby = useAppSelector((state) => state.nearbyOffers);
  const reviews = useAppSelector((state) => state.reviews);

  const selectNearOffers = useMemo(() => nearby.slice(0,3), [nearby]);
  const selectReviews = useMemo(() => reviews.slice(0,10), [reviews]);

  const isOfferDataLoading = useAppSelector((state) => state.isCurrentOfferDataLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const {id} = useParams<string>();

  useEffect(()=>{
    if(id){
      dispatch(fetchCurrentOfferActions(id));
    }
  },[dispatch, id]);

  if(isOfferDataLoading || !offer || AuthorizationStatus.Unknown === authorizationStatus){
    return <LoadingScreen/>;
  }

  const extractOffer = extractCommonInfo(offer);

  const {
    images,
    isPremium,
    title,
    isFavorite,
    rating,
    type,
    price,
    goods,
    host,
    description,
    city
  } = offer;

  return(
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((i) => (
                <div key={i} className="offer__image-wrapper">
                  <img className="offer__image" src={i} alt="Photo studio" />
                </div>
              )
              )}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <Bookmark
                  cardType={'offer'}
                  offer={{id: offer.id, isFavorite}}
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width : `${rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((g) => (
                    <li key={g} className="offer__inside-item">
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={
                      classNames(
                        'offer__avatar-wrapper user__avatar-wrapper',
                        {'offer__avatar-wrapper--pro': host.isPro}
                      )
                    }
                  >
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt={host.name} />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  {host.isPro &&
                    <span className="offer__user-status">
                      Pro
                    </span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList
                  reviews={selectReviews}
                />
                {authorizationStatus === AuthorizationStatus.Auth &&
                <CommentSubmitForm/>}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              currentScreen={'near'}
              cityInfo={city}
              offers={selectNearOffers.concat(extractOffer)}
              selectedOfferId={selectedOfferId}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CitiesCardsList
              offers={selectNearOffers.concat(extractOffer)}
              onListItemHover={setSelectedOfferId}
              cardType={'near'}
            />
          </section>
        </div>
      </main>
    </div>
  );
};
