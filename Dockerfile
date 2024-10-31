# Use uma imagem oficial do PHP com suporte ao Laravel
FROM php:8.3-fpm

# Instale dependências do sistema
RUN apt-get update && apt-get install -y \
    libpq-dev \
    curl \
    zip \
    unzip \
    git \
    npm \
    && docker-php-ext-install pdo_pgsql

# Instale o Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Instale as dependências do Node.js
RUN npm install -g npm

# Defina o diretório de trabalho
WORKDIR /var/www

# Copie os arquivos do projeto
COPY . .

# Instale as dependências do PHP e do Node.js
RUN composer install
RUN npm install && npm run build

# Defina o ponto de entrada
CMD php artisan serve --host=0.0.0.0 --port=8000
