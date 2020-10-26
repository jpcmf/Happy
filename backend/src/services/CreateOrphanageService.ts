import { getCustomRepository } from 'typeorm';

import Orphanege from '../models/Orphanage';
import OrphanagesRepository from '../repositories/OrphanagesRepository';

interface Request {
  name: string;
  orphanage_id: string;
  latitude: number;
  longitude: number;
  about: string;
  phone: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: {
    path: string;
  }[];
}

class CreateOrphanageService {
  public async execute({
    name,
    orphanage_id,
    latitude,
    longitude,
    about,
    phone,
    instructions,
    opening_hours,
    open_on_weekends,
    images,
  }: Request): Promise<Orphanege> {
    const orphanagesRepository = getCustomRepository(OrphanagesRepository);

    const orphanage = orphanagesRepository.create({
      name,
      orphanage_id,
      latitude,
      longitude,
      about,
      phone,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    await orphanagesRepository.save(orphanage);

    return orphanage;
  }
}

export default CreateOrphanageService;
