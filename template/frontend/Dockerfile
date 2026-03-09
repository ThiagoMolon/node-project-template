FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# O Vite por padrão roda na porta 5173
CMD ["npm", "run", "dev", "--", "--host"]