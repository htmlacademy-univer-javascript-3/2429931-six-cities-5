import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { useMap } from '../../hooks';
import { OfferCommonInfo, OfferCommonInfoCity} from '../../types/offers';
import { getMarkerForMap } from './marker';
import { CardType } from '../../types/card';
import { useParams } from 'react-router-dom';

type MapProps = {
  offers: OfferCommonInfo[];
  cityInfo: OfferCommonInfoCity;
  selectedOfferId: string;
  currentScreen: CardType;
}

export const Map = ({offers, cityInfo, selectedOfferId, currentScreen}: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, cityInfo);
  const markersRef = useRef<leaflet.Marker[]>([]);
  const {id} = useParams();

  useEffect(() => {
    if (map) {
      const currentMarkers = markersRef.current;
      offers.forEach((offer) => {
        const marker = getMarkerForMap(offer, selectedOfferId, currentScreen, id);

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
  }, [map, offers, cityInfo, selectedOfferId, currentScreen, id]);

  return(
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
};
