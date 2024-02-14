FROM node:21.6.1 as build

ARG BUILD_ENV=prod

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN npm cache clean --force
RUN npm ci

COPY . .

# fix add multi-stage build
# VOLUME [ "/app/node_modules" ]

CMD ["npm", "run", "dev"]

# for production
# RUN npm run build
# CMD ["npm", "run", "start"]