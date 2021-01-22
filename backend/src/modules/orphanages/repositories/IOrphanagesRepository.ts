import Orphanage from '../infra/typeorm/entities/Orphanage';
import ICreateOrphanageDTO from '../dtos/ICreateOrphanageDTO';

export default interface IOrphanagesRepository {
  create(data: ICreateOrphanageDTO): Promise<Orphanage>;
  findAllOrphanages(): Promise<Orphanage[]>;
  findById(id: string): Promise<Orphanage | undefined>;
  save(id: Orphanage): Promise<Orphanage>;
}
