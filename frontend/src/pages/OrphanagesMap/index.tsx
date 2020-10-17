import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapIcon from 'utils/mapIcon';
import colors from '../../styles/colors';
import { Container, Aside, MapWrapper, Button } from './styles';

import { ReactComponent as MarkerImg } from '../../assets/marker.svg';

import api from '../../services/api';

interface Orphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const Orphanages: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

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
          <MarkerImg />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Curitiba</strong>
          <span>Paraná</span>
        </footer>
      </Aside>

      <MapWrapper>
        <Map
          center={[-25.4609276, -49.2740054]}
          zoom={13}
          style={{ width: '100%', height: '100%' }}
        >
          {/* <TileLayer
              url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            /> */}
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          {orphanages.map((orphanage) => (
            <Marker
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
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

      <Button to="/orphanages/create">
        <FiPlus size={32} color={colors.white} />
      </Button>
    </Container>
  );
};

export default Orphanages;
