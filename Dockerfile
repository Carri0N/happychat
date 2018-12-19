FROM node:8
WORKDIR /usr/src/happychat
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
