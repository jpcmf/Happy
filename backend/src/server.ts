import express from 'express'; 

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
  return response.json({ message: 'Olá mundo' });
});

app.listen(3333);