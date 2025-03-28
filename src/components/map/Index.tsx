import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { useMap } from './useMap';
import { OfferCommonInfo, OfferCommonInfoCity} from '../../types/offers';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './map.constants';
import { getCustomIcon } from './utils';

type MapProps = {
  city: OfferCommonInfoCity;
  offers: OfferCommonInfo[];
  selectedOfferId: string;
}

const defaultCustomIcon = getCustomIcon(URL_MARKER_DEFAULT);
const currentCustomIcon = getCustomIcon(URL_MARKER_CURRENT);

export const Map = ({city, offers, selectedOfferId}: MapProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);
  const markersRef = useRef<leaflet.Marker[]>([]);

  useEffect(() => {
    if (map) {
      markersRef.current.forEach((m) => {
        map.removeLayer(m);
      });
      markersRef.current = [];

      offers.forEach((offer) => {
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
        marker.addTo(map);

        marker.bindPopup(`<b>${offer.title}</b><br>${offer.type}`);

        marker.on('mouseover', () => {
          marker.openPopup();
          marker.setIcon(currentCustomIcon);
        });

        marker.on('mouseout', () => {
          marker.closePopup();
          marker.setIcon(defaultCustomIcon);
        });

        markersRef.current.push(marker);
      });
    }
  }, [map, offers, selectedOfferId]);

  return(
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
};
