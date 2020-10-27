import React from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  Container,
  Aside,
  AsideHeader,
  AsideTitle1,
  AsideTitle2,
  AsideFooter,
  AsideCity,
  AsideState,
} from './styles';

import Logo from '../../utils/Logo';

import 'leaflet/dist/leaflet.css';

const PetsMap: React.FC = () => {
  return (
    <Container>
      <Aside>
        <AsideHeader>
          <Logo />
          <AsideTitle1>Escolha uma entidade no mapa</AsideTitle1>
          <AsideTitle2>Seu pet está esperando você :)</AsideTitle2>
        </AsideHeader>
        <AsideFooter>
          <AsideCity>Campinas</AsideCity>
          <AsideState>São Paulo</AsideState>
        </AsideFooter>
      </Aside>
      <Map
        center={[-22.8957085, -47.0627667]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>
    </Container>
  );
};

export default PetsMap;
