import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapIcon from 'utils/mapIcon';
import { useTheme } from 'hooks/theme';
import colors from '../../styles/colors';
import { Container, Aside, MapWrapper, Button } from './styles';

import { ReactComponent as MarkerImg } from '../../assets/marker-v2.svg';

import api from '../../services/api';

interface Orphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const Orphanages: React.FC = () => {
  const mapDefaultPosition = { latitude: -25.4609276, longitude: -49.2740054 };
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const [mapZoomIn, setMapZoomIn] = useState(12);
  const [mapPosition, setMapPosition] = useState({
    latitude: mapDefaultPosition.latitude,
    longitude: mapDefaultPosition.longitude,
  });
  const { theme } = useTheme();

  useEffect(() => {
    api.get('/orphanages').then((response) => {
      const { data } = response;
      setOrphanages(data);
    });
  }, []);

  return (
    <Container>
      <Aside>
        <header>
          <Link to="/">
            <MarkerImg />
          </Link>
          <h2>Escolha uma instituição de acolhimento no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Curitiba</strong>
          <span>Paraná</span>
        </footer>
      </Aside>

      <MapWrapper>
        <Map
          center={[mapPosition.latitude, mapPosition.longitude]}
          zoom={mapZoomIn}
          style={{ width: '100%', height: '100%' }}
          onClick={() => {
            setMapZoomIn(12);
            setMapPosition({
              latitude: mapDefaultPosition.latitude,
              longitude: mapDefaultPosition.longitude,
            });
          }}
        >
          {/* <TileLayer
              url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            /> */}
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/${theme}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          {orphanages.map((orphanage) => (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              onClick={() => {
                setMapZoomIn(16);
                setMapPosition({
                  latitude: orphanage.latitude,
                  longitude: orphanage.longitude,
                });
              }}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                minHeigh={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color={colors.white} />
                </Link>
              </Popup>
            </Marker>
          ))}
        </Map>
      </MapWrapper>

      <Button to="/signin">
        <FiPlus size={32} color={colors.white} />
      </Button>
    </Container>
  );
};

export default Orphanages;
