FROM node:20-alpine
COPY . /api
WORKDIR /api
RUN npm i
RUN npm run build
EXPOSE 3000
ENTRYPOINT npm start