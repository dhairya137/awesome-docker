FROM node:latest as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


# Smaller version of first build(This is Production ready)
FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install --only=production
COPY --from=build /app/dist ./dist
CMD npm run start:prod