import { Request, Response } from 'express';
import * as Yup from 'yup';
import { container } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import orphanageView from '@modules/orphanages/infra/http/views/orphanages_view';

import CreateOrphanageService from '@modules/orphanages/services/CreateOrphanageService';
import ListOrphanagesService from '@modules/orphanages/services/ListOrphanagesService';
import FindOrphanageService from '@modules/orphanages/services/FindOrphanageService';

class OrphanagesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      orphanage_id,
      latitude,
      longitude,
      about,
      phone,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const createOrphanage = container.resolve(CreateOrphanageService);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const data = {
      name,
      orphanage_id,
      latitude,
      longitude,
      about,
      phone,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      orphanage_id: Yup.string(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      phone: Yup.string().required(),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage = await createOrphanage.execute(data);

    return response.status(201).json(orphanage);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listOrphanages = container.resolve(ListOrphanagesService);

    const orphanages = await listOrphanages.execute();

    return response.json(orphanageView.renderMany(orphanages));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showOrphanage = container.resolve(FindOrphanageService);

    const orphanage = await showOrphanage.execute(id);

    if (!orphanage) {
      throw new AppError('Orphanage not found.', 404);
    }

    return response.json(orphanageView.render(orphanage));
  }
}

export default OrphanagesController;
