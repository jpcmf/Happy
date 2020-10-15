import { Router } from 'express';

import OrphanagesRepository from '../repositories/OrphanagesRepository';
import CreateOrphanageService from '../services/CreateOrphanageService';

const orphanagesRouter = Router();
const orphanagesRepository = new OrphanagesRepository();

orphanagesRouter.get('/', (request, response) => {
  const orphanages = orphanagesRepository.all();

  return response.json(orphanages);
});

orphanagesRouter.post('/', (request, response) => {
  try {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_on_weekends,
    } = request.body;

    const createOrphanage = new CreateOrphanageService(orphanagesRepository);

    const orphanage = createOrphanage.execute({
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_on_weekends,
    });

    return response.json(orphanage);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default orphanagesRouter;
