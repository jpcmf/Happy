import 'reflect-metadata';
import 'dotenv/config';

import cors from 'cors';

import express from 'express';
import 'express-async-errors';

import oldUploadConfig from '@config/oldUpload';
import errorHandler from '@shared/errors/handler';
import routes from './routes';

import '@shared/infra/typeorm/connection';
import '@shared/container';

import logRequests from '../../../utils/logRequest';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(oldUploadConfig.directory));
// app.use('/uploads', express.static(uploadConfig.uploadsFolder));
app.use(logRequests);
app.use(routes);
app.use(errorHandler);

app.listen(3333, () => {
  console.log('⚙️  Server started on port 3333!');
});
