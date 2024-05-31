# API REST para Gerenciamento de Jogos

API REST para um sistema de consulta e manipulação de jogos em um banco de dados fictício.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Como Usar](#como-usar)
- [Documentação da API](#documentação-da-api)
- [Autor](#autor)

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/node.png" alt="Logo Node.js" width="300"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/express.png" alt="Logo Express.js" width="300"/>
  </div>
</div>

## Status

![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

## Descrição

Esse projeto consiste em uma API responsável por gerenciar uma lista de jogos. É possível listar, adicionar, editar e excluir jogos.

## Funcionalidades

- Listar todos os jogos.
- Adicionar um novo jogo.
- Recuperar um jogo específico pelo ID.
- Editar um jogo específico pelo ID.
- Excluir um jogo específico pelo ID.

## Como Usar

1. Clone o repositório em sua máquina local:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Navegue até a pasta do projeto:
   ```sh
   cd pastaDoArquivo
   ```
3. Inicialize o projeto com npm:
   ```sh
   npm init
   ```
4. Instale as dependências necessárias:
   ```sh
   npm install express body-parser cors
   ```
5. Execute o projeto:
   ```sh
   node main.js
   ```

A API estará rodando no endereço `http://localhost:8000`.

## Documentação da API

### Endpoints

#### GET /games

Este endpoint retorna a lista de todos os jogos.

##### Retorno:

- Status Code: 200 OK
- Corpo da resposta: Uma lista de objetos JSON, cada um representando um jogo com os seguintes atributos:
  - `id` (number): O identificador único do jogo.
  - `title` (string): O título do jogo.
  - `year` (number): O ano de lançamento do jogo.
  - `price` (number): O preço do jogo.

#### GET /game/:id

Este endpoint retorna um jogo específico com base no seu ID.

##### Parâmetros:

- `id` (number): O ID do jogo a ser recuperado.

##### Retorno:

- Status Code: 200 OK se o jogo for encontrado.
- Status Code: 400 Bad Request se o ID não for um número.
- Status Code: 404 Not Found se o jogo não for encontrado.
- Corpo da resposta: Um objeto JSON representando o jogo com os seguintes atributos:
  - `id` (number): O identificador único do jogo.
  - `title` (string): O título do jogo.
  - `year` (number): O ano de lançamento do jogo.
  - `price` (number): O preço do jogo.

#### POST /game

Este endpoint adiciona um novo jogo à lista de jogos.

##### Parâmetros:

Corpo da requisição deve conter os seguintes campos:

- `title` (string): O título do novo jogo.
- `price` (number): O preço do novo jogo.
- `year` (number): O ano de lançamento do novo jogo.

##### Retorno:

- Status Code: 200 OK

#### DELETE /game/:id

Este endpoint exclui um jogo com base no seu ID.

##### Parâmetros:

- `id` (number): O ID do jogo a ser excluído.

##### Retorno:

- Status Code: 200 OK se o jogo for excluído com sucesso.
- Status Code: 400 Bad Request se o ID não for um número.
- Status Code: 404 Not Found se o jogo não for encontrado.

#### PUT /game/:id

Este endpoint atualiza as informações de um jogo existente com base no seu ID.

##### Parâmetros:

- `id` (number): O ID do jogo a ser atualizado.
- Corpo da requisição pode conter os seguintes campos para atualização:
  - `title` (string): O novo título do jogo.
  - `price` (number): O novo preço do jogo.
  - `year` (number): O novo ano de lançamento do jogo.

##### Retorno:

- Status Code: 200 OK se o jogo for atualizado com sucesso.
- Status Code: 400 Bad Request se o ID não for um número.
- Status Code: 404 Not Found se o jogo não for encontrado.

## Autor

Desenvolvido por Diego Franco.
