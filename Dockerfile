FROM node:20.11.0-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY index.js .

CMD [ "npm", "start" ]
