FROM node:16-alpine

WORKDIR /app

COPY app.js /app/

EXPOSE 80

CMD ["node", "app.js"]
