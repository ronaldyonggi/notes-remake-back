FROM node:22-bookworm

WORKDIR /usr/src/app

COPY package* ./
COPY prisma ./prisma

RUN npm i && npx prisma generate