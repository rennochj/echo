FROM node:current-alpine3.14

WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet

COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]
