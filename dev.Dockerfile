FROM node:22-bookworm

WORKDIR /usr/src/app

COPY . .

RUN npm i