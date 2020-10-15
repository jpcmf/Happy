import Orphanege from '../models/Orphanage';
import OrphanagesRepository from '../repositories/OrphanagesRepository';

interface Request {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  open_on_weekends: boolean;
}

class CreateOrphanageService {
  private orphanagesRepository: OrphanagesRepository;

  constructor(orphanagesRepository: OrphanagesRepository) {
    this.orphanagesRepository = orphanagesRepository;
  }

  public execute({
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_on_weekends,
  }: Request): Orphanege {
    const orphanage = this.orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_on_weekends,
    });

    return orphanage;
  }
}

export default CreateOrphanageService;
