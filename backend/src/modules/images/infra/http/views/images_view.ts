import Image from '@modules/images/infra/typeorm/entities/Image';

export default {
  render(image: Image): { id: string; url: string } {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]): { id: string; url: string }[] {
    return images.map(image => this.render(image));
  },
};
