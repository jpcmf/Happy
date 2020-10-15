import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import OrphanagesRepository from '../repositories/OrphanagesRepository';
import CreateOrphanageService from '../services/CreateOrphanageService';

const orphanagesRouter = Router();

orphanagesRouter.get('/', async (request, response) => {
  const orphanagesRepository = getCustomRepository(OrphanagesRepository);
  const orphanages = await orphanagesRepository.find();

  return response.json(orphanages);
});

orphanagesRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const orphanagesRepository = getCustomRepository(OrphanagesRepository);

  const orphanage = await orphanagesRepository.findOneOrFail(id);

  return response.json(orphanage);
});

orphanagesRouter.post('/', async (request, response) => {
  try {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const createOrphanage = new CreateOrphanageService();

    const orphanage = await createOrphanage.execute({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    });

    return response.status(201).json(orphanage);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default orphanagesRouter;
