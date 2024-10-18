<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

 # API random-users

API que permite generar y obtener datos de usuarios aleatorios. La API proporciona un endpoint para recuperar un conjunto de usuarios, con opciones para personalizar la cantidad de usuarios generados. 

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias usando npm:

```bash
npm install
```
## Test 

Para testear la API se debe correr el siguiente comando 

```bash

# e2e tests
$ npm run test:e2e

```
## Uso

Para utilizar esta API

1. Inicia el servidor ejecutando el siguiente comando:

```bash
npm run start
```

2. La solicitud HTTP al endpoint correspondiente

## RANDOMUSERS API

- **Parámetros de Consulta**:
  - `count` (opcional): número de usuarios a generar. Si no se especifica, se devuelve un valor predeterminado.
  - `GET ¨http://localhost:3000/users`: Obtiene una lista de usuarios generada aleatoriamente.
  - Query Parameters: `count(number)`
  - Respuesta exitosa: `200 OK`
  - Ejemplo de respuesta: 
    ```json
    [{
        "id": "e1e91707-98e3-4f87-a5c6-a8633e1caf8f",
        "name": "Andrea Daugherty",
        "email": "Vergie_Wolff90@hotmail.com",
        "address": {
            "street": "367 Kreiger Mall",
            "city": "Fort Casimertown",
            "country": "China"
        },
        "phone": "1-651-504-0978"
    },
    {
        "id": "c924e06e-6bbc-4a98-a59e-f8619de172dd",
        "name": "Stephen Welch",
        "email": "Estevan77@yahoo.com",
        "address": {
            "street": "16746 Clarence Street",
            "city": "Kutchchester",
            "country": "Zambia"
        },
        "phone": "725.283.9879 x8161"
    },
    {
        "id": "b4e4e606-ff1f-41c0-a6ad-d09be86ad1ed",
        "name": "Jeannette Hansen-Terry",
        "email": "Dashawn20@gmail.com",
        "address": {
            "street": "1180 Gavin Shoal",
            "city": "Raulshire",
            "country": "Mauritius"
        },
        "phone": "1-666-868-7018 x2762"
    },
    {
        "id": "e37a8dbd-f2b4-4be8-ba05-9b1f7fa67293",
        "name": "Adam Wisoky",
        "email": "Magdalena.Weimann-Wisoky31@gmail.com",
        "address": {
            "street": "9235 River Road",
            "city": "Joliet",
            "country": "South Sudan"
        },
        "phone": "800.644.5400 x22677"
    },
    {
        "id": "3a0021c1-407a-47c6-b1b1-bbb2222c52f6",
        "name": "Christine Volkman",
        "email": "Juliana34@hotmail.com",
        "address": {
            "street": "6571 Dach Causeway",
            "city": "Avondale",
            "country": "Dominican Republic"
        },
        "phone": "969.986.1672 x194"
    },
    {
        "id": "3193e23a-35d2-4d3a-9f3a-b51c0d5f789c",
        "name": "Horace Tillman DDS",
        "email": "Presley.Howell@yahoo.com",
        "address": {
            "street": "94711 Estell Points",
            "city": "Ricardotown",
            "country": "Fiji"
        },
        "phone": "1-333-970-0590 x98981"
    },
    {
        "id": "5b9d0d39-c982-4e37-a34e-1d59cf7e485d",
        "name": "Arlene Swaniawski",
        "email": "Dario_Streich26@gmail.com",
        "address": {
            "street": "616 Bedford Road",
            "city": "Collierchester",
            "country": "Iraq"
        },
        "phone": "(381) 435-1152 x6107"
    },
    {
        "id": "b1d4875b-e6c9-4371-adb5-6c246a63ca77",
        "name": "Stanley Boyle DVM",
        "email": "Elinore54@gmail.com",
        "address": {
            "street": "7993 State Road",
            "city": "Botsfordborough",
            "country": "North Macedonia"
        },
        "phone": "1-410-700-5905 x771"
    },
    {
        "id": "7a74d156-e5b0-4986-8b25-f9b8ccae037f",
        "name": "Janie Schumm",
        "email": "Helen_Ratke60@gmail.com",
        "address": {
            "street": "9240 Bridge Street",
            "city": "North Earline",
            "country": "Algeria"
        },
        "phone": "1-223-882-5683 x87866"
    },
    {
        "id": "f96a6316-b98c-4614-8a45-68e908ee39d3",
        "name": "Jaime Krajcik",
        "email": "Ron.Stracke@yahoo.com",
        "address": {
            "street": "5158 Lorenz Cliff",
            "city": "East Gertrude",
            "country": "Guinea-Bissau"
        },
        "phone": "(685) 278-7919"
    }]
    ```
## Errores

- `400 Bad Request`: Invalid count parameter.
- `500 Internal Server Error`: Internal Server Error.


## Stay in touch

- Author - [Analia Faure]
- linkedin - [Linkedin](https://www.linkedin.com/in/analia-faure-52ab3311a/)

## License

Nest is [MIT licensed](LICENSE).


