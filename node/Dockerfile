# исп образ с веб-сервером
FROM nginx:latest

# копируем HTML-файлик с каруселью изображений внутрь контейнера
COPY index.html /usr/share/nginx/html/index.html

# здесь также копираум изображения карусели внутрь контейнера
COPY images /usr/share/nginx/html/images

# копируем наш скриптик внутрь контейнера
COPY index.js /usr/share/nginx/html/index.js

# порт, кот. будет прослушивать контейнер
EXPOSE 80

# команды для запуска NGINX при запуске контейнера
CMD ["nginx", "-g", "daemon off;"]
