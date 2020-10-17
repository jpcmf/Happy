import Leaflet from 'leaflet';

import mapMarkerImage from '../assets/marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImage,
  iconSize: [48, 58],
  iconAnchor: [29, 58],
  popupAnchor: [170, 10],
});

export default mapIcon;
