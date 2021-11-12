# Część obowiązkowa:

## 3.
 a. docker build -t zad1 . <br/>
 b. docker run -p 8080:8080 -d zad1 <br/>
 c. docker logs [ciąg znaków który wygenerował się po komendzie docker run] <br/>
 d. docker history zad1 <br/>

## 4.
 #### Aby zbudowac obraz z DockerFile z GitHuba należy użyć polecenia:
 docker build [adres url repozytorium]
 #### Aby przenieść stworzony obraz na swoje konto należy użyć poleceń:
 docker tag [id] [tag] <br/>
 docker push [repozytorium/nazwa:tag]

# Część dodatkowa:

## 1.
 a. docker run -d -p 6677:6677 --restart always --name registry registry:2 <br/>
 b. <br/>
 pobranie najnowszej wersji: docker pull ubuntu <br/>
 zmiana nazwy: docker tag ubuntu localhost:6677/ubuntu <br/>
 wgranie do prywatnego, utworzonego rejestru: docker push localhost:6677/ubuntu <br/>
## 2.
 ### 1. stworzenie katalogu auth: 
  mkdir auth
#### 3. stworzenie pliku hasła dla użytkownika testuser z hasłem testpassword: 
docker run --entrypoint htpasswd httpd:2 -Bbn testuser testpassword > auth/htpasswd
#### 4. zatrzymanie obecnie uruchomionego rejestru: 
docker container stop registry
#### 5. uruchomienie rejestru poleceniem: 
docker run -d --restart=always --name registry -v "$(pwd)"/certs:/certs -e REGISTRY_HTTP_ADDR=0.0.0.0:443 -e REGISTRY_HTTP_TLS_CERTIFICATE=/certs/domain.crt -e REGISTRY_HTTP_TLS_KEY=/certs/domain.key -p 443:443 registry:2
