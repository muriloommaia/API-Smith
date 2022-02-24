# Portuguese
## Descrição do Projeto

  Este foi um dos projetos realizados enquanto estava no curso de desenvolvimento de software para web da [trybe](https://www.betrybe.com/). Aqui é desenvolvida uma API em _Typescript_, a API possui, a priori, 4 endpoints. Onde o usuário pode se cadastrar, fazer login, cadastrar produtos e executar ordens de compra dos produtos desejados. 
  Trata-se de um projeto inicial de back-end, por conta disso, suas funções são limitadas.

  ### Os endpoints são:

  * `/users`, sendo utilizado com o método `POST`;
    <details>
      <summary> Deve receber a seguinte estrutura: </summary>

      ```json
        {
          "username": "UsernameHere", // Necessita ter mais que 7 caracteres
          "classe": "string", // Necessita ter mais que 2 caracteres
          "level": 1, // Necessita ser maior que 0 e ser um número
          "password": "passwordHere" // Necessita ter mais que 7 caracteres
        }
      ```
    </details>
  <br>

  * `/login`, sendo utilizado com o método `POST`;
    <details>
      <summary> Deve receber a seguinte estrutura : </summary>
      
      ```json
        {
          "username": "UsernameHere", // Necessita ter mais que 7 caracteres
          "password": "passwordHere" // Necessita ter mais que 7 caracteres
        }
      ```
    </details>
  <br>
  
  * `/products`, sendo utilizado com o método `POST` e `GET`;
    <details>
      <summary> Deve receber a seguinte estrutura (POST): </summary>

      ```json
        {
          "name": "Espada media", // Mínimo de 2 caracteres
          "amount": "30 peças de ouro", // Mínimo de 2 caracteres
        }
      ```
    </details>
  <br>

  * `/orders:id`, sendo utilizado com o método `GET`;
  * `/orders`, sendo utilizado com o método `POST` e `GET`;
    <details>
      <summary> Deve receber a seguinte estrutura (POST): </summary>

      ```json
        {
          "products": [3, 2] // Necessita ser um array de números
        }
      ```
    </details>
  <br>

**:warning:** Na criação do usuário e em seu login, é gerado um token *JWT* que deve ser usado no *Headers* como um *Authorization* para todas as outras requisições;

## Tecnologias utilizadas

As principais tecnologias utilizadas no projeto são:
- Typescript
- Express
- Knex
- MYSQL

Além disso, as seguintes extensões foram utilizadas:

- dotenv
- express-async-errors
- joi
- jsonwebtoken

> O express-async-errors é utilizado para tratamento de erros assíncronos, bastante utilizado para o middleware de erro da aplicação

## Como instalar as dependências necessárias

Para a instalação das dependencias basta utilizar:
```shell
npm install
or
yarn install
```

## Como Executar o projeto
```shell
npm start
or
yarn start
```
