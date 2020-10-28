import 'reflect-metadata';

import path from 'path';
import cors from 'cors';

import express from 'express';
import 'express-async-errors';

import errorHandler from '@shared/errors/handler';
import routes from './routes';

import '@shared/infra/typeorm/connection';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(routes);
app.use(errorHandler);

// function logRequests(request, response, next) {
//   const { method, url } = request;

//   const logLabel = `[${method.toUpperCase()}] ${url}`;

//   console.log(logLabel);

//   return next();
// }

// app.use(logRequests);

// app.get('/users', (request, response) =>
//   response.json({ message: 'Olá mundo' }),
// );

app.listen(3333, () => {
  console.log('⚙️  Server started on port 3333!'); // eslint-disable-line
});
