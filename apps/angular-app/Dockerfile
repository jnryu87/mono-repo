FROM mono-repo-base AS builder

WORKDIR /app/builder

COPY . .

RUN yarn nx build angular-app

FROM nginx:1.21.6

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/builder/dist/apps/angular-app ./
COPY --from=builder /app/builder/apps/angular-app/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
