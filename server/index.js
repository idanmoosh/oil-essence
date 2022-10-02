const express = require('express');
const PORT = process.env.PORT || 3001;
const db = require('./db');

const app = express();

app.get('/api', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.get('/store', (req, res) => {
  res.status(200).json(db);
});
app.get('/store/:id', (req, res) => {
  let id = req.params.id - 1;
  let product = db[id];
  res.status(200).json(product);
});

app.listen(PORT, () => {
  console.log(`Server is Listening on ${PORT}`);
});
