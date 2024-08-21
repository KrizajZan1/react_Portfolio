FROM node:22.6.0

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV PORT=6921

EXPOSE 6921

CMD ["npm", "run", "dev"]
