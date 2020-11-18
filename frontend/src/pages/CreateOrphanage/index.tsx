import React, { useCallback, useRef, useState, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import mapIcon from 'utils/mapIcon';
import getValidationErrors from 'utils/getValidationsErrors';

import { FiAlertCircle, FiPlus, FiX } from 'react-icons/fi';

import api from 'services/api';

import { useToast } from '../../hooks/toast';

import {
  Sidebar,
  Input,
  InputMask,
  Textarea,
  ToogleSwitch,
} from '../../components';

import { Container } from './styles';

import OrphanageFormData from './interface';

const CreateOrphanage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [open_on_weekends, setOpenOnWeekends] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<
    { name: string; url: string }[]
  >([]);

  const { addToast } = useToast();

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  const handleSubmit = useCallback(
    async (data: OrphanageFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required(
            'O campo Nome é de preenchimento obrigatório.',
          ),
          about: Yup.string().required(
            'O campo Sobre é de preenchimento obrigatório.',
          ),
          phone: Yup.string()
            .required('O campo WhatsApp é de preenchimento obrigatório.')
            .min(13, 'Insira um WhatsApp válido.')
            .max(14, 'Insira um WhatsApp válido.'),
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

        const { latitude, longitude } = position;

        const dataForm = new FormData();

        dataForm.append('name', data.name);
        dataForm.append('about', data.about);
        dataForm.append('phone', data.phone);
        dataForm.append('latitude', String(latitude));
        dataForm.append('longitude', String(longitude));
        dataForm.append('instructions', data.instructions);
        dataForm.append('opening_hours', data.opening_hours);
        dataForm.append('open_on_weekends', String(open_on_weekends));
        images.forEach((image) => {
          dataForm.append('images', image);
        });

        await api.post('/orphanages', dataForm);

        addToast({
          type: 'success',
          title: '😃 Cadastro concluído.',
          description: 'Seu cadastro foi realizado sucesso.',
        });

        history.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
        console.log(err); // eslint-disable-line
      }
    },
    [images, position, addToast, history, open_on_weekends],
  );

  function handleToggle(event: boolean) {
    console.log(event); // eslint-disable-line

    setOpenOnWeekends(event);
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    console.log(event.target.files); // eslint-disable-line

    const selectedImages = images.concat(Array.from(event.target.files));

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return {
        name: image.name,
        url: URL.createObjectURL(image),
      };
    });

    setPreviewImages(selectedImagesPreview);
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

            <span className="alert">
              <FiAlertCircle size={18} />
              Clique no mapa para marcar a localização desejada.
            </span>

            <Map
              center={[-25.4321587, -49.2796673]}
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
              <Input
                name="name"
                label="Nome"
                placeholder="Insira o nome da instituição de acolhimento"
              />
            </div>

            <div className="input-block">
              <Textarea
                name="about"
                label="Sobre"
                small="Máximo de 300 caracteres"
                maxLength={300}
                placeholder="Descreva a instituição de acolhimento"
              />
            </div>

            <div className="input-block">
              <InputMask
                name="phone"
                label="Número do WhatsApp"
                mask="(99) 9999tt999?"
                formatChars={{ '9': '[0-9]', t: '[0-9-]', '?': '[0-9 ]' }}
                maskChar={null}
                placeholder="Insira um número de WhatsApp"
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map((image) => (
                  <div className="images-container--item" key={image.name}>
                    <img src={image.url} alt={image.name} />
                    <span>
                      <FiX
                        size={18}
                        onClick={() => {
                          setImages(
                            images.filter((deletedImage) => {
                              return image.name !== deletedImage.name;
                            }),
                          );
                          setPreviewImages(
                            previewImages.filter(
                              (deletedImage) => image !== deletedImage,
                            ),
                          );
                        }}
                      />
                    </span>
                  </div>
                ))}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>

              <input
                multiple
                type="file"
                id="image[]"
                onChange={handleSelectImages}
                accept="image/x-png,image/gif,image/jpeg"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <Textarea
                name="instructions"
                label="Instruções"
                placeholder="Insira as instruções de visitação"
              />
            </div>

            <div className="input-block">
              <Input
                name="opening_hours"
                label="Horário das visitas"
                placeholder="Insira o horário de visitação"
              />
            </div>

            <div className="input-block">
              <ToogleSwitch
                label="Atende fim de semana"
                checked={open_on_weekends}
                id="open_on_weekends"
                name="open_on_weekends"
                value="yes"
                onChange={(e) => {
                  handleToggle(e.target.checked);
                }}
              />
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
