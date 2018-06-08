FROM node:8-alpine

WORKDIR /usr/app

COPY ./package.json ./package.json
COPY ./src ./src
COPY ./dist ./dist
COPY ./node_modules ./node_modules

ENV PORT 3001

EXPOSE 3001

CMD ["npm", "start"]
