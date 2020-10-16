import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import orphanagesRouter from './orphanages.routes';

const routes = Router();
const upload = multer(uploadConfig);

routes.use('/orphanages', upload.array('images'), orphanagesRouter);

export default routes;
