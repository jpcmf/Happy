import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';

import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';
import orphanagesRouter from './orphanages.routes';

const routes = Router();
const upload = multer(uploadConfig);

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/orphanages', upload.array('images'), orphanagesRouter);

export default routes;
