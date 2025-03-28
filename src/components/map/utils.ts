import leaflet from 'leaflet';
import { SIZE_MARKER } from './map.constants';

export const getCustomIcon = (url: string) => (
  leaflet.icon({
    iconUrl: url,
    iconSize: [SIZE_MARKER[0], SIZE_MARKER[1]],
    popupAnchor: [0, -SIZE_MARKER[1] / 2]
  })
);
