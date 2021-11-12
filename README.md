# Część obowiązkowa:

## 3.
###a. docker build -t zad1 .
###b. docker run -p 8080:8080 -d zad1
###c. docker logs [ciąg znaków który wygenerował się po komendzie docker run]
###d. docker history zad1

## 4.
### Aby zbudowac obraz z DockerFile z GitHuba należy użyć polecenia:
### docker build [adres url repozytorium]
### Aby przenieść stworzony obraz na swoje konto należy użyć poleceń:
### docker tag [id] [tag]
### docker push [repozytorium/nazwa:tag]

#Część dodatkowa:

## 1.
###a. docker run -d -p 6677:6677 --restart always --name registry registry:2
###b. 
###pobranie najnowszej wersji: docker pull ubuntu
###zmiana nazwy: docker tag ubuntu localhost:6677/ubuntu
###wgranie do prywatnego utworzonego, rejestru: docker push localhost:6677/ubuntu
## 2.
###1. stworzenie katalogu auth: mkdir auth
###2. stworzenie pliku hasła dla użytkownika testuser z hasłem testpassword: docker run --entrypoint htpasswd httpd:2 -Bbn testuser testpassword > auth/htpasswd
###3. zatrzymanie obecnie uruchomionego rejestru: docker container stop registry
###4. uruchomienie rejestru poleceniem: docker run -d --restart=always --name registry -v "$(pwd)"/certs:/certs -e REGISTRY_HTTP_ADDR=0.0.0.0:443 -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key -p 443:443 registry:2
