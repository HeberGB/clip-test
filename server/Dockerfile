FROM node:14.15.4-alpine3.10 AS BUILD

WORKDIR /home/node/app
ADD . .

ENV NODE_ENV=production

RUN npm install
RUN npm run build

FROM node:14.15.4-alpine3.10 AS WORKER

WORKDIR /home/node/app

ENV NODE_ENV=production

COPY --from=BUILD /home/node/app/dist /home/node/app/dist
COPY --from=BUILD /home/node/app/package.json /home/node/app/package.json
COPY --from=BUILD /home/node/app/package-lock.json /home/node/app/package-lock.json

RUN npm ci

USER node

CMD ["npm", "run", "start:prod"]
