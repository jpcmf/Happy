import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

// import UpdateOrphanageImagesService from '@modules/orphanages/services/UpdateOrphanageImagesService';
import OrphanagesController from '../controllers/OrphanagesController';
import OrphanagesImagesController from '../controllers/OrphanagesImagesController';

const orphanagesRouter = Router();
const orphanagesController = new OrphanagesController();
const orphanagesImagesController = new OrphanagesImagesController();

const upload = multer(uploadConfig.multer);

orphanagesRouter.get('/', orphanagesController.index);

orphanagesRouter.get('/:id', orphanagesController.show);

orphanagesRouter.use(ensureAuthenticated);

orphanagesRouter.post('/', orphanagesController.create);

orphanagesRouter.patch(
  '/images',
  upload.single('images'),
  orphanagesImagesController.update,
);

// orphanagesRouter.patch('/images', upload.single('images'), async (req, res) => {
//   console.log(req.file);

//   try {
//     const updateOrphanageImages = new UpdateOrphanageImagesService();

//     const orphanage = await updateOrphanageImages.execute({
//       user_id: req.user.id,
//       orphanage_id: '',
//       imageFilenames: {
//         id: '',
//         orphanage: '',
//         path: req.file.filename,
//       },
//     });

//     return res.json(orphanage);
//   } catch (err) {
//     return res.status(400).json({ error: err.message });
//   }
// });

export default orphanagesRouter;
