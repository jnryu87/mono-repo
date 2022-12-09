FROM mono-repo-base AS builder

WORKDIR /app/builder

COPY . .

RUN yarn nx build nest-app

FROM node:16.15.0-alpine3.15

WORKDIR /app

COPY --from=builder /app/builder/dist/apps/nest-app ./
COPY --from=builder /app/builder/node_modules ./node_modules

EXPOSE 80

CMD ["node", "/app/main.js"]
