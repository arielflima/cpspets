import Leaflet from 'leaflet';

import mapMarkerImg from '../../assets/logo.png';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [50, 42],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default mapIcon;
