# Employee Manager — Angular + Node + Firebase

Este projeto é uma aplicação FullStack desenvolvida com **Angular (frontend)**, **Node.js/Express (backend)**, **Firebase Authentication** e uma **API** para arquitetura BFF, para gerenciamento de funcionários.

---

## Funcionalidades

- Registro e login de usuários com Firebase Authentication
- Tela para listar funcionários
- Cadastro, edição e exclusão de funcionários
- Autenticação com proteção de rotas (guard)
- Backend com Express que valida usuários e gerencia dados
- Comunicação com Firebase para autenticação e emissão de tokens

---

## Tecnologias Utilizadas

- **Frontend**: Angular 19
- **Backend**: Node.js + Express
- **Autenticação**: Firebase Authentication
- **Banco de dados**: NoSQL Firebase FireStore
- **Outros**: RxJS, Bootstrap, JWT

---

## Como rodar o projeto

- Após fazer o clone do projeto pelo gitHub é necessário executar o comando npm install nas três pastas de projetos que são clonadas, assim serão intaladas as dependências pertinents a cada projeto

## como executar localmente


### Backend

1 - é necessário entrar na pasta backend e executar o start do projeto com os seguintes comandos

    cd backend
    npm run dev


2 - é necessário entrar na pasta bffApi e também executar o start do projeto com os seguintes comandos

    cd bffApi
    npm run dev


### Frontend (Angular)

1. Vamos executar o projeto `frontend`, execute os seguintes comandos

   cd frontend
   ng server -o

assim o projeto frontend vai estar rodando na porta 4200, ao executar comando acima já será redirecionado para a tela de login.





