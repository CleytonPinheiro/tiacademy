## Projeto em desenvolvimento em parceria com a TiAcademy

## 🔖 Sobre

---

# [I][n][d][i][c][e]

- [I](#idice)
  - [🚀 Tecnologias utilizadas](#-tecnologias-utilizadas)
  - [🎓 Quem ministrou?](#-quem-ministrou)
  - [🗂 Como baixar o projeto e rodar o projeto com docker (sem usar o XAMP e afins)](#-como-baixar-o-projeto-e-rodar-o-projeto-com-docker-sem-usar-o-xamp-e-afins)

---

## 🚀 Tecnologias utilizadas

O projeto está em desenvolvimento, até o momento usando as tecnologias:

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript)
- [Docker](https://www.docker.com/products/docker-desktop)

---

## 🎓 Quem ministrou?

Parceria com TiAcademy

## 🗂 Como baixar o projeto e rodar o projeto com docker (sem usar o XAMP e afins)

```sh

    # Clonar o repositório
    $ git clone https://github.com/CleytonPinheiro/tiacademy
```

```sh
    # Entrar no diretório
    $ na raiz do projeto
```

```sh
    # Baixar e instalar o docker
    $ [Docker](https://www.docker.com/products/docker-desktop)
```

```sh
    # Rodando o apache com o Docker
    docker build -t my-apache2 .

    docker run -dit --name my-running-app -p 8080:80 my-apache2

    Visit http://localhost:8080 and you will see It works!
    Visite http: // localhost: 8080 e você verá que funciona!
```
