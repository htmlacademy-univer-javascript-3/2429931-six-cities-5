import leaflet from 'leaflet';
import { SIZE_MARKER } from './map.constants';

const {w, h} = SIZE_MARKER;

export const getCustomIcon = (url: string) => (
  leaflet.icon({
    iconUrl: url,
    iconSize: [w, h],
    popupAnchor: [0, -h / 2]
  })
);
