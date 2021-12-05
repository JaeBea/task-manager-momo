FROM node:lts
LABEL maintainer="Beatrice Williams"
LABEL application="Task Manager Momo UI"

COPY package.json package-lock.json /app/
WORKDIR /app

RUN npm install
COPY . /app/

ENV NODE_ENV production

EXPOSE 3000

CMD ["node_modules/.bin/next", "dev"]
