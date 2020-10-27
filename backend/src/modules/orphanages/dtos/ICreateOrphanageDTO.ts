export default interface ICreateOrphanageDTO {
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
