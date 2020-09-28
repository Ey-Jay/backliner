FROM node:latest

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json /home/app

RUN openssl genrsa -out key.pem

RUN openssl req -new -key key.pem -out csr.pem

RUN openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem

RUN rm csr.pem

RUN npm install

COPY . /home/app

EXPOSE 3001
