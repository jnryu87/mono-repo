FROM node:16.15.0-alpine3.15 as builder

WORKDIR /app/builder

COPY . .

RUN yarn install
