FROM node:latest

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN openssl genrsa -out key.pem

RUN openssl req -new -key key.pem -out csr.pem -subj '/C=DE/CN=api.backliner.app'

RUN openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem

RUN rm csr.pem

RUN npm install

EXPOSE 3001
