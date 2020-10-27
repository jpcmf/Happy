import { EntityRepository, Repository } from 'typeorm';

import IOrphanagesRepository from '@modules/orphanages/repositories/IOrphanagesRepository';

import Orphanage from '../entities/Orphanage';

// interface CreateOrphanageDTO {
//   name: string;
//   latitude: number;
//   longitude: number;
//   about: string;
//   instructions: string;
//   opening_hours: string;
//   open_on_weekends: boolean;
// }

@EntityRepository(Orphanage)
class OrphanagesRepository
  extends Repository<Orphanage>
  implements IOrphanagesRepository {
  // public create({
  //   name,
  //   latitude,
  //   longitude,
  //   about,
  //   instructions,
  //   opening_hours,
  //   open_on_weekends,
  // }: CreateOrphanageDTO): Orphanage {
  //   const orphanage = new Orphanage({
  //     name,
  //     latitude,
  //     longitude,
  //     about,
  //     instructions,
  //     opening_hours,
  //     open_on_weekends,
  //   });
  //   this.orphanages.push(orphanage);
  //   return orphanage;
  // }
}

export default OrphanagesRepository;
