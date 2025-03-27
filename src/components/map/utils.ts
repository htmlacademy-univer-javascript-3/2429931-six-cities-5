import leaflet from 'leaflet';

export const getCustomIcon = (url: string) => (
  leaflet.icon({
    iconUrl: url,
  })
);
