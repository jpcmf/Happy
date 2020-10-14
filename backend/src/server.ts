import express from 'express'; 

const app = express();

app.get('/users', (req, res) => {
  return res.json({ message: 'Olá' });
});

app.listen(3333);