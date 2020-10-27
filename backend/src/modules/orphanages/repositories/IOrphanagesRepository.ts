import Orphanage from '../infra/typeorm/entities/Orphanage';

export default interface IOrphanagesRepository {
  create(): Promise<Orphanage>;
}
