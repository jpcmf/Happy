import express from 'express';

import routes from './routes';

const app = express();

app.use(express.json());

function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  return next();
}

app.use(logRequests);

app.get('/users', (request, response) => response.json({ message: 'Olá mundo' }));

app.listen(3333, () => {
  console.log('⚙️  Server started on port 3333!');
});
