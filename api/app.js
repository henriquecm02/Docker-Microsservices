const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Microserviço está funcionando!');
});

app.listen(port, () => {
  console.log(`App ouvindo na porta ${port}`);
});
