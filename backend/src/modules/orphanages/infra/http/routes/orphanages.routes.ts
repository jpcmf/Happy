import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import OrphanagesController from '../controllers/OrphanagesController';

const orphanagesRouter = Router();
const orphanagesController = new OrphanagesController();

orphanagesRouter.get('/', orphanagesController.index);

orphanagesRouter.get('/:id', orphanagesController.show);

orphanagesRouter.use(ensureAuthenticated);

orphanagesRouter.post('/', orphanagesController.create);

export default orphanagesRouter;
