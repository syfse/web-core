FROM node:slim-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build webapp
RUN npm run build

# Delete everything except the dist folder
RUN find . -maxdepth 1 ! -name 'dist' -exec rm -rf {} +

EXPOSE 3000