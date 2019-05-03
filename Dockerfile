FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./
COPY scripts/run.sh /
COPY scripts/000-default.conf /etc/apache2/sites-available/

RUN npm ci --only=production && apt update && apt install -y apache2 && chmod +x /run.sh && a2enmod proxy && a2enmod proxy_http

COPY . .

EXPOSE 8080
EXPOSE 80

CMD [ "/run.sh" ]
