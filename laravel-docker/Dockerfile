FROM php:7.4-fpm

RUN apt-get update && apt-get install -y \
  git \
  zip \
  unzip \
  curl \
  libpng-dev \
  libonig-dev \
  libxml2-dev 

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo_mysql mbstring


WORKDIR /app
COPY composer.json .
RUN composer install --no-scripts
COPY . . 

CMD php artisan serve --host=0.0.0.0 --port=80
# Run this command after builing this container - docker run -p 8081:80 <image_name>
