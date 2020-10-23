import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import usersRouter from './users.routes';
import orphanagesRouter from './orphanages.routes';

const routes = Router();
const upload = multer(uploadConfig);

routes.use('/orphanages', upload.array('images'), orphanagesRouter);
routes.use('/users', usersRouter);

export default routes;
