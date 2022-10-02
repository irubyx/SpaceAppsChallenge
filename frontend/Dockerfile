FROM node:alpine

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 3001

CMD ["node", "src/server.js"]