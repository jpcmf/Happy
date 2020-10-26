import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import * as Yup from 'yup';

import OrphanagesRepository from '../repositories/OrphanagesRepository';
import CreateOrphanageService from '../services/CreateOrphanageService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import orphanageView from '../views/orphanages_view';

const orphanagesRouter = Router();

orphanagesRouter.use(ensureAuthenticated);

orphanagesRouter.get('/', async (request, response) => {
  const orphanagesRepository = getCustomRepository(OrphanagesRepository);
  const orphanages = await orphanagesRepository.find({
    relations: ['images'],
  });

  return response.json(orphanageView.renderMany(orphanages));
});

orphanagesRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const orphanagesRepository = getCustomRepository(OrphanagesRepository);

  const orphanage = await orphanagesRepository.findOneOrFail(id, {
    relations: ['images'],
  });

  return response.json(orphanageView.render(orphanage));
});

orphanagesRouter.post('/', async (request, response) => {
  const {
    name,
    orphanage_id,
    latitude,
    longitude,
    about,
    phone,
    instructions,
    opening_hours,
    open_on_weekends,
  } = request.body;

  const createOrphanage = new CreateOrphanageService();

  const requestImages = request.files as Express.Multer.File[];
  const images = requestImages.map(image => {
    return { path: image.filename };
  });

  const data = {
    name,
    orphanage_id,
    latitude,
    longitude,
    about,
    phone,
    instructions,
    opening_hours,
    open_on_weekends: open_on_weekends === 'true',
    images,
  };

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    orphanage_id: Yup.string(),
    latitude: Yup.number().required(),
    longitude: Yup.number().required(),
    about: Yup.string().required().max(300),
    phone: Yup.string().required(),
    instructions: Yup.string().required(),
    opening_hours: Yup.string().required(),
    open_on_weekends: Yup.boolean().required(),
    images: Yup.array(
      Yup.object().shape({
        path: Yup.string().required(),
      }),
    ),
  });

  await schema.validate(data, {
    abortEarly: false,
  });

  const orphanage = await createOrphanage.execute(data);

  return response.status(201).json(orphanage);

  // try {
  // } catch (err) {
  //   return response.status(400).json({ error: err.message });
  // }
});

export default orphanagesRouter;
