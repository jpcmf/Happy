import { inject, injectable } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

import Orphanage from '../infra/typeorm/entities/Orphanage';
import IOrphanagesRepository from '../repositories/IOrphanagesRepository';

interface IRequest {
  id: string;
  name: string;
  // orphanage_id: string;
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

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    id,
    name,
    // orphanage_id,
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
      // orphanage_id,
      latitude,
      longitude,
      about,
      phone,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    // const orphanageId = await this.orphanagesRepository.findById(id);
    // console.log('orphanageId.....', orphanageId);

    const filename = await this.storageProvider.saveFile(images[0].path);
    console.log('filename....', filename);

    // orphanage.images = filename;

    // console.log('passou');

    if (orphanage) {
      console.log('passou....', orphanage);
    }

    return orphanage;
  }
}

export default CreateOrphanageService;
