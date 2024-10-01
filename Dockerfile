FROM node:20.11.0-alpine

WORKDIR /app

COPY package.json .

COPY index.js .

RUN npm install

CMD [ "npm", "start" ]
