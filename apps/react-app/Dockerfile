FROM mono-repo-base AS builder

WORKDIR /app/builder

COPY . .

RUN yarn nx build react-app

FROM nginx:1.21.6

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/builder/dist/apps/react-app ./
COPY --from=builder /app/builder/apps/react-app/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
