const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

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
        .btn {
          margin-top: 2rem;
          padding: 0.8rem 1.5rem;
          background-color: #e63946;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .btn:hover {
          background-color: #d62839;
        }
      </style>
    </head>
    <body>
      <h1>🐳 ¡Hola desde Docker!</h1>
      <p>Estás ejecutando esta app dentro de un contenedor Docker.</p>
      <button class="btn" onclick="alert('¡Estás listo para usar Docker como un pro!')">
        ¡Haz clic si estás aprendiendo!
      </button>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Aplicación escuchando en http://localhost:${PORT}`);
});
