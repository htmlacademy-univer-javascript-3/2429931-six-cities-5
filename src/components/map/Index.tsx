import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { useMap } from '../../hooks/useMap';
import { OfferCommonInfo, OfferCommonInfoCity} from '../../types/offers';
import { getMarkerForMap } from './marker';

type MapProps = {
  city: OfferCommonInfoCity;
  offers: OfferCommonInfo[];
  selectedOfferId: string;
}

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
        const marker = getMarkerForMap(offer, selectedOfferId);

        marker.addTo(map);
        markersRef.current.push(marker);
      });
    }
  }, [map, offers, city, selectedOfferId]);

  return(
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
};
