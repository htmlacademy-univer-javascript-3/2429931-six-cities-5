import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { OfferCommonInfoCity } from '../types/offers';
import leaflet from 'leaflet';

export const useMap = (mapRef: MutableRefObject<HTMLDivElement | null>, city: OfferCommonInfoCity) => {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if(mapRef.current !== null && !isRenderedRef.current){
      const instance = leaflet
        .map(mapRef.current);

      leaflet
        .tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [mapRef, city, map]);

  return map;
};
