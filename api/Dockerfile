# Use a imagem oficial do Node.js como base
FROM node:14

# Crie e defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e instale as dependências
COPY package*.json ./
RUN npm install

# Copie o código da aplicação para o container
COPY . .

# Exponha a porta que o servidor vai usar
EXPOSE 8080

# Defina o comando para iniciar a aplicação
CMD ["npm", "start"]
