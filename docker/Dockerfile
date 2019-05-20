# Specify a base image
FROM node:alpine as builder

WORKDIR /usr/app
# Install some dependecies
RUN mkdir bookshop
WORKDIR /usr/app/bookshop
COPY frontend/package.json ./
RUN npm install
COPY  ./frontend ./
RUN npm run build

FROM node:alpine

WORKDIR /usr/app
RUN mkdir bookshop && mkdir server
WORKDIR /usr/app/bookshop
COPY --from=builder ./usr/app/bookshop/dist/BookShop .

WORKDIR /usr/app/server
COPY ./server ./
RUN npm install

EXPOSE 4200

# Default command
CMD ["npm", "start"]