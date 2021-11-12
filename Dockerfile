#wybranie obrazu node w wersji 10
FROM node:10
#informacje o autorze
LABEL autor="Arkadiusz Szumny"
#kopiowanie wszystkich plikow z obecnego folderu do kontenera
COPY . .
#instalacja managera pakietow dla node.js
RUN npm install
#ustawienie portu
EXPOSE 8080
#uruchomienie serwera
CMD ["node", "server.js"]