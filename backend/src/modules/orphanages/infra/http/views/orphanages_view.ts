import Orphanage from '@modules/orphanages/infra/typeorm/entities/Orphanage';
import imagesView from '@modules/images/infra/http/views/images_view';

export default {
  render(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      // orphanage_id: orphanage.orphanage_id,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      phone: orphanage.phone,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imagesView.renderMany(orphanage.images),
      created_at: orphanage.created_at,
      updated_at: orphanage.updated_at,
    };
  },

  renderMany(orphanages: Orphanage[]) {
    return orphanages.map(orphanage => {
      const { images, ...rest } = this.render(orphanage); // eslint-disable-line

      return rest;
    });
  },
};
