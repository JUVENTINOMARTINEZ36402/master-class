const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (como imágenes)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hola Docker</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1d3557, #457b9d);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 1.2rem;
        }
        img {
          max-width: 200px;
          margin-top: 1.5rem;
        }
      </style>
    </head>
    <body>
      <h1>🐳 ¡Hola desde Docker!</h1>
      <p>Estás ejecutando esta app dentro de un contenedor Docker.</p>
      <img src="/docker_whale.png" alt="Docker logo" />
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Aplicación escuchando en http://localhost:${PORT}`);
});
