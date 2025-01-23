FROM node:20-slim

WORKDIR /app

COPY Package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]