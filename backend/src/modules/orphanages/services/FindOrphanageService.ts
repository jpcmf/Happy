import { inject, injectable } from 'tsyringe';

import Orphanage from '../infra/typeorm/entities/Orphanage';

import IOrphanagesRepository from '../repositories/IOrphanagesRepository';

@injectable()
class FindOrphanageService {
  constructor(
    @inject('OrphanagesRepository')
    private orphanagesRepository: IOrphanagesRepository,
  ) {}

  public async execute(id: string): Promise<Orphanage | undefined> {
    const orphanage = await this.orphanagesRepository.findById(id);

    return orphanage;
  }
}

export default FindOrphanageService;
