FROM node:14.15.4-alpine3.10 AS BUILD

WORKDIR /home/node/app
ADD . .

RUN npm install

ENV NODE_ENV=production

RUN npm run build

FROM nginx:alpine AS WEB

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=BUILD /home/node/app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]

EXPOSE 80