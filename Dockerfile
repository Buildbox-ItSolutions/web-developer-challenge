# ==== CONFIGURATION =====
# Node image
FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173
# Start the app
CMD ["npm","run","dev"] 

