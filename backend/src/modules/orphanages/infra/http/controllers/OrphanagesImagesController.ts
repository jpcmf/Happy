import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateOrphanageImagesService from '@modules/orphanages/services/UpdateOrphanageImagesService';

export default class OrphanagesImagesController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateOrphanageImages = container.resolve(
      UpdateOrphanageImagesService,
    );

    const orphanage = await updateOrphanageImages.execute({
      user_id: req.user.id,
      orphanage_id: '',
      imageFilenames: {
        id: '',
        path: '',
        orphanage: '',
      },
    });

    return res.json(classToClass(orphanage));
  }
}
