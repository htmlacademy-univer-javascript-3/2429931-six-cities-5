import { Offers } from '../types/offers';
import {reviews} from '../mocks/reviews';

export const offersAllInfo: Offers = [
  {
    'id': '1af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 2,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'images': [
      'https://url-to-image/image.png'
    ],
    'maxAdults': 4,
    reviews: [reviews[0]]
  },{
    'id': '2af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'room',
    'price': 1200,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'img/apartment-02.jpg',
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'images': [
      'https://url-to-image/image.png'
    ],
    'maxAdults': 4,
    reviews: [reviews[1]]
  },{
    'id': '3af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'oooooo. Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 12000,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'img/apartment-03.jpg',
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'images': [
      'https://url-to-image/image.png'
    ],
    'maxAdults': 4,
    reviews: [reviews[3]]
  },{
    'id': '4af6f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'AAAAAA. Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120000,
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }
    },
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 1,
    'previewImage': 'img/apartment-01.jpg',
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://url-to-image/image.png',
      'isPro': false
    },
    'images': [
      'https://url-to-image/image.png'
    ],
    'maxAdults': 4,
    reviews: []
  }
];
