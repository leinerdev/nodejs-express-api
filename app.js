const express = require('express');
const app = express();
const port = process.env.PORT ?? 3000;

app.get('/', (req, res) => {
  res.json({ message: '¡Hola desde mi primera API!' });
});

app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});