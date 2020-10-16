import 'reflect-metadata';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import express from 'express';
import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(
  cors({
    // origin: ''
  }),
);
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
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
  // eslint-disable-next-line no-console
  console.log('⚙️  Server started on port 3333!');
});
