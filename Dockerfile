FROM node:lts-alpine as dev
WORKDIR /usr/src/app

FROM node:lts-alpine as prod

ENV NODE_ENV=production
ENV PORT=8080
ENV HUSKY=0
ENV REDIS_URL=redis://redis

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN npm install
# If you are building your code for production
RUN npm set-script prepare ""
RUN npm ci

# Bundle app source
COPY . .

RUN npm run build-back
RUN npm run build-front

EXPOSE 8080
CMD [ "node", "./dist-back/main.js"]
