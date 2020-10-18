import React, { useCallback, useRef, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
// import Toggle from 'react-toggle';

import mapIcon from 'utils/mapIcon';
import getValidationErrors from 'utils/getValidationsErrors';

import { FiPlus } from 'react-icons/fi';

import api from 'services/api';
import { Container } from './styles';

import { Sidebar, Input, Textarea, ToogleSwitch } from '../../components';

interface OrphanageFormData {
  position: {
    latitude: string;
    longitude: string;
  };
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: {
    path: string;
  };
}

const CreateOrphanage: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const formRef = useRef<FormHandles>(null);
  const [open_on_weekends, setOpenOnWeekends] = useState(true);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  const handleSubmit = useCallback(async (data: OrphanageFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required(
          'O campo Nome é de preenchimento obrigatório.',
        ),
        about: Yup.string().required(
          'O campo Sobre é de preenchimento obrigatório.',
        ),
        instructions: Yup.string().required(
          'O campo Instruções é de preenchimento obrigatório.',
        ),
        opening_hours: Yup.string().required(
          'O campo Horário das visitas é de preenchimento obrigatório.',
        ),
        open_on_weekends: Yup.boolean().nullable(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);

      const { latitude, longitude } = position;

      const {
        name,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
      } = data;

      const formData = {
        latitude,
        longitude,
        name,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
      };

      const response = await api.post('/orphanages', formData);

      console.log(response);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
      console.log(err);
    }
  }, []);

  function handleToggle(e: boolean) {
    console.log(!!e);
    setOpenOnWeekends(!e);
  }

  return (
    <Container>
      <Sidebar />

      <main>
        <Form
          onSubmit={handleSubmit}
          ref={formRef}
          className="create-orphanage-form"
        >
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              {position.latitude !== 0 && (
                <Marker
                  riseOnHover
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <div className="input-block">
              <Input name="name" label="Nome" />
            </div>

            <div className="input-block">
              <Textarea
                name="about"
                label="Sobre"
                small="Máximo de 300 caracteres"
                maxLength={300}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image" />

              <button type="button" className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <Textarea name="instructions" label="Instruções" />
            </div>

            <div className="input-block">
              <Input name="opening_hours" label="Horário das visitas" />
            </div>

            <div className="input-block">
              <ToogleSwitch
                label="Atende fim de semana"
                checked={!open_on_weekends}
                id="open_on_weekends"
                name="open_on_weekends"
                value="yes"
                onChange={(e) => {
                  handleToggle(e.target.checked);
                }}
              />

              {/* <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </div> */}
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </Form>
      </main>
    </Container>
  );
};

export default CreateOrphanage;

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
