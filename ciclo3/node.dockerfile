FROM node
MAINTAINER Cleyton Pinheiro
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm start
