FROM httpd:latest
COPY ./public-html/ /usr/local/apache2/htdocs/;


VOLUME  . /usr/local/apache2/htdocs/;

# Comandos para usar rodar o apache
# docker build -t my-apache2 .
# docker run -dit --name my-running-app -p 8080:80 my-apache2

#Visit http://localhost:8080 and you will see It works!
# Visite http: // localhost: 8080 e você verá que funciona!

#docker run -dit --name my-apache-app -p 80:80 -v "$PWD":/usr/local/apache2/htdocs/ httpd:latest