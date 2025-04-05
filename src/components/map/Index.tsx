import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { useMap } from '../../hooks';
import { OfferCommonInfo, OfferCommonInfoCity} from '../../types/offers';
import { getMarkerForMap } from './marker';

type MapProps = {
  offers: OfferCommonInfo[];
  cityInfo: OfferCommonInfoCity;
  selectedOfferId: string;
}

export const Map = ({offers, cityInfo, selectedOfferId}: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, cityInfo);
  const markersRef = useRef<leaflet.Marker[]>([]);

  useEffect(() => {
    if (map) {
      const currentMarkers = markersRef.current;
      offers.forEach((offer) => {
        const marker = getMarkerForMap(offer, selectedOfferId);

        marker.addTo(map);
        currentMarkers.push(marker);
      });
      return () => {
        currentMarkers.forEach((m) => {
          map.removeLayer(m);
        });
        currentMarkers.length = 0;
      };
    }
  }, [map, offers, cityInfo, selectedOfferId]);

  return(
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
};
