import { Router } from 'express';

import OrphanagesRepository from '../repositories/OrphanagesRepository';

const orphanagesRouter = Router();
const orphanagesRepository = new OrphanagesRepository();

orphanagesRouter.get('/', (request, response) => {
  const orphanages = orphanagesRepository.all();

  return response.json(orphanages);
});

orphanagesRouter.post('/', (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_on_weekends,
  } = request.body;

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_on_weekends,
  });

  return response.json(orphanage);
});

export default orphanagesRouter;
