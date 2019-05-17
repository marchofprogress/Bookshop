# Specify a base image
FROM node:alpine

WORKDIR /usr/app
# Install some dependecies
RUN mkdir frontend
WORKDIR /usr/app/frontend
COPY ./frontend/package.json ./
RUN npm install
COPY  ./frontend ./
RUN npm build

WORKDIR /usr/app
RUN mkdir server
WORKDIR /usr/app/server
COPY ./server/package.json ./
RUN npm install
COPY ./server ./

# Default command
CMD ["npm", "start"]