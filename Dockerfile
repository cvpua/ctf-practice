FROM node:12.16.1
RUN mkdir -p /mnt/yses-bullet
ADD . /mnt/yses-bullet
WORKDIR /mnt/yses-bullet
COPY package.json ./
RUN yarn install
EXPOSE 8085
RUN npm install -g pm2
CMD pm2-runtime start app.js
