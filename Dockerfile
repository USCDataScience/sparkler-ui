FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./
COPY scripts/run.sh /

RUN npm ci --only=production && apt update && apt install -y apache2 && chmod +x /run.sh

COPY . .

EXPOSE 8080
EXPOSE 80

CMD [ "/run.sh" ]
