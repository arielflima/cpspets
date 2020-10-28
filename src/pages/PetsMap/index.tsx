import React, { useState } from 'react';

import { Map, TileLayer, Marker } from 'react-leaflet';
import Logo from '../../utils/Logo';
import mapIcon from '../../utils/MapIcon';
import PetPointPopup from '../../utils/PetPointPopup';
import 'leaflet/dist/leaflet.css';
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

export interface IPetPoint {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const PetsMap: React.FC = () => {
  const [petPoints, setPetPoints] = useState<IPetPoint[]>([
    {
      id: 1,
      latitude: -22.8957085,
      longitude: -47.0627667,
      name: 'Lar dos dogs',
    },
  ]);

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

        {petPoints.map(petPoint => {
          const { name, id, longitude, latitude } = petPoint;

          return (
            <Marker position={[latitude, longitude]} icon={mapIcon} key={id}>
              <PetPointPopup {...petPoint} />
            </Marker>
          );
        })}
      </Map>
    </Container>
  );
};

export default PetsMap;
