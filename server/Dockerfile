FROM node:lts
LABEL maintainer="Beatrice Williams"
LABEL application="Task Manager Momo API"

COPY package.json package-lock.json /app/
WORKDIR /app

RUN npm install
COPY . /app/

ENV NODE_ENV production

USER node

CMD ["node", "app.js"]
