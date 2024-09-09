FROM node:22-bookworm

WORKDIR /usr/src/app

COPY package* ./

RUN npm i

