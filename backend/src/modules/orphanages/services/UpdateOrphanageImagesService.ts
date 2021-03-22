import { inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import User from '@modules/users/infra/typeorm/entities/User';
import Orphanage from '@modules/orphanages/infra/typeorm/entities/Orphanage';
import Image from '@modules/images/infra/typeorm/entities/Image';
import IOrphanages from '../repositories/IOrphanagesRepository';

interface IRequest {
  user_id: string;
  orphanage_id: string;
  imageFilenames: string;
  // imageFilenames: Image;
}

class UpdateOrphanageImagesService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('OrphanagesRepository')
    private orphanagesRepository: IOrphanages,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    user_id,
    orphanage_id,
    imageFilenames,
  }: IRequest): Promise<Orphanage> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError(
        'Only authenticated users can change the orphanages images.',
        401,
      );
    }

    const orphanage = await this.orphanagesRepository.findById(orphanage_id);

    console.log('user...', user);
    console.log('orphanage...', orphanage);

    if (orphanage?.images) {
      // delete old images
      // const orphanageImagesFilePath = path.join(
      //   uploadConfig.driver,
      //   orphanage.images,
      // );
      // const orphangeImagesFileExists = await fs.promises.stat(
      //   orphanageImagesFilePath,
      // );
      // if (orphangeImagesFileExists) {
      //   await fs.promises.unlink(orphanageImagesFilePath);
      // }
      this.storageProvider.deleteFile(orphanage.images);
    }

    const filename = await this.storageProvider.saveFile(imageFilenames);

    console.log(filename);

    // orphanage?.images = filename;

    await this.orphanagesRepository.save(orphanage);

    return orphanage;
  }
}

export default UpdateOrphanageImagesService;
