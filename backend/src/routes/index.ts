import { Router } from 'express';

import orphanagesRouter from './orphanages.routes';

const routes = Router();

routes.use('/orphanages', orphanagesRouter);

export default routes;
