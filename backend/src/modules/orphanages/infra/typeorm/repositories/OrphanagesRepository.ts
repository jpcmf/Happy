import { getRepository, Repository } from 'typeorm';

import IOrphanagesRepository from '@modules/orphanages/repositories/IOrphanagesRepository';
import ICreateOrphanageDTO from '../../../dtos/ICreateOrphanageDTO';

import Orphanage from '../entities/Orphanage';

class OrphanagesRepository implements IOrphanagesRepository {
  private ormRepository: Repository<Orphanage>;

  constructor() {
    this.ormRepository = getRepository(Orphanage);
  }

  public async create({
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
  }: ICreateOrphanageDTO): Promise<Orphanage> {
    const orphanage = this.ormRepository.create({
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

    await this.ormRepository.save(orphanage);

    return orphanage;
  }
}

export default OrphanagesRepository;
