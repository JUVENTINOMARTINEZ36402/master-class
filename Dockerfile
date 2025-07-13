# Imagen base
FROM node:18-alpine

# Crear carpeta de trabajo
WORKDIR /usr/src/app

# Copiar archivos
COPY package*.json ./
RUN npm install
COPY . .

# Exponer puerto y correr app
EXPOSE 3000
CMD ["npm", "start"]
