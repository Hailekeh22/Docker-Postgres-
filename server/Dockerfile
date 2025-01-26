FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN  npm install

COPY . .

EXPOSE 4545

CMD ["node" , "Server.js"]

