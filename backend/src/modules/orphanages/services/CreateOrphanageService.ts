import { inject, injectable } from 'tsyringe';

import Orphanage from '../infra/typeorm/entities/Orphanage';

import IOrphanagesRepository from '../repositories/IOrphanagesRepository';

interface IRequest {
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

@injectable()
class CreateOrphanageService {
  constructor(
    @inject('OrphanagesRepository')
    private orphanagesRepository: IOrphanagesRepository,
  ) {}

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
  }: IRequest): Promise<Orphanage> {
    const orphanage = await this.orphanagesRepository.create({
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

    return orphanage;
  }
}

export default CreateOrphanageService;
