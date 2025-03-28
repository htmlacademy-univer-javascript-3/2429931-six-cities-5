import { OfferCommonInfo } from '../../types/offers';
import leaflet from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './map.constants';
import { getCustomIcon } from './utils';

const defaultCustomIcon = getCustomIcon(URL_MARKER_DEFAULT);
const currentCustomIcon = getCustomIcon(URL_MARKER_CURRENT);

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

  const handleMouseOver = () => {
    marker.openPopup();
    marker.setIcon(currentCustomIcon);
  };

  const handleMouseOut = () => {
    marker.closePopup();
    marker.setIcon(defaultCustomIcon);
  };

  marker.off('mouseover', handleMouseOver);
  marker.off('mouseout', handleMouseOut);

  marker.on('mouseover', handleMouseOver);
  marker.on('mouseout', handleMouseOut);

  return marker;
};
