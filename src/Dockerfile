# Define a imagem base
FROM node:lts-alpine


# Define o diretório de trabalho para a aplicação
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

RUN npm i gulp-cli -g

# Copia todo o código fonte para o diretório de trabalho
COPY . .

# Define a porta em que a aplicação irá rodar
EXPOSE 3000

# Inicia a aplicação
CMD [ "gulp", "watch" ]
