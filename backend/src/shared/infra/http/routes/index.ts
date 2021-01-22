import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import orphanagesRouter from '@modules/orphanages/infra/http/routes/orphanages.routes';

const routes = Router();
const upload = multer(uploadConfig.multer);

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/orphanages', upload.array('images'), orphanagesRouter);

export default routes;
