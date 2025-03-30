import { OfferCommonInfo } from '../../types/offers';
import leaflet from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './map.constants';
import { getCustomIcon } from './utils';

const defaultCustomIcon = getCustomIcon(URL_MARKER_DEFAULT);
const currentCustomIcon = getCustomIcon(URL_MARKER_CURRENT);

const handleMarkerMouseOver = (marker: leaflet.Marker) => {
  marker.openPopup();
  marker.setIcon(currentCustomIcon);
};

const handleMarkerMouseOut = (marker: leaflet.Marker) => {
  marker.closePopup();
  marker.setIcon(defaultCustomIcon);
};

export const getMarkerForMap = (offer: OfferCommonInfo, selectedOfferId: string) => {
  const marker = leaflet
    .marker({
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    },{
      alt: `${offer.title}`,
      icon: (selectedOfferId !== offer.id)
        ? defaultCustomIcon
        : currentCustomIcon
    });

  const popupContent = `<b>${offer.title}</b><br>${offer.type}`;
  const popup = leaflet.popup().setContent(popupContent);
  marker.bindPopup(popup);

  marker.on('mouseover', () => handleMarkerMouseOver(marker));
  marker.on('mouseout', () => handleMarkerMouseOut(marker));

  return marker;
};
