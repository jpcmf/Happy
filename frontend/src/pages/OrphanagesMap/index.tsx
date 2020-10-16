import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import colors from '../../styles/colors';
import { Container, Aside, MapWrapper, Button } from './styles';

import Image, { ReactComponent as MarkerImg } from '../../assets/marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: Image,
  iconSize: [48, 58],
  iconAnchor: [29, 58],
  popupAnchor: [170, 10],
});

const Orphanages: React.FC = () => {
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
          <Marker icon={mapIcon} position={[-25.4609276, -49.2740054]}>
            <Popup
              closeButton={false}
              minWidth={240}
              minHeigh={240}
              className="map-popup"
            >
              Orfanato Bacaninha
              <Link to="/orphanages/1">
                <FiArrowRight size={20} color={colors.white} />
              </Link>
            </Popup>
          </Marker>
        </Map>
      </MapWrapper>

      <Button to="/orphanages/create">
        <FiPlus size={32} color={colors.white} />
      </Button>
    </Container>
  );
};

export default Orphanages;
