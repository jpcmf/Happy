import Orphanage from '../models/Orphanage';

interface CreateOrphanageDTO {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  open_on_weekends: boolean;
}
class OrphanagesRepository {
  private orphanages: Orphanage[];

  constructor() {
    this.orphanages = [];
  }

  public all(): Orphanage[] {
    return this.orphanages;
  }

  public create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_on_weekends,
  }: CreateOrphanageDTO): Orphanage {
    const orphanage = new Orphanage({
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_on_weekends,
    });

    this.orphanages.push(orphanage);

    return orphanage;
  }
}

export default OrphanagesRepository;
