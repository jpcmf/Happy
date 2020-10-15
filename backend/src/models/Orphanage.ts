import { v4 as uuid } from 'uuid';

class Orphanege {
  id: string;

  name: string;

  latitude: number;

  longitude: number;

  about: string;

  instructions: string;

  open_on_weekends: boolean;

  constructor({
    name,
    latitude,
    longitude,
    about,
    instructions,
    open_on_weekends,
  }: Omit<Orphanege, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.about = about;
    this.instructions = instructions;
    this.open_on_weekends = open_on_weekends;
  }
}

export default Orphanege;
