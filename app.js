const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hola Docker desde tu contenedor 🐳</h1>');
});

app.listen(PORT, () => {
  console.log(`Aplicación escuchando en http://localhost:${PORT}`);
});
