# Página de Piadas do Chuck Norris

- Funcioanndo em https://chuck-norris-page.vercel.app/

Bem-vindo à Página de Piadas do Chuck Norris! Desenvolvida a partir da api Chuck Norris Jokes.

![localhost_3000_ (1)](https://github.com/EmanuelBitenc/ChuckNorris_Page/assets/63247451/9746a5d1-1390-4534-b8fd-d2abb374d695)

## Interface Visual

Pagina desenvolvida usando React junto do Chakra UI para a criação de um design moderno e elegante.

## Listagem de Piadas

Utilizamos a API [https://api.chucknorris.io/jokes/random](https://api.chucknorris.io/jokes/random) para trazer as piadas. Cada piada trará detalhes como:

- A piada em si.
- Categorias associadas: Cada piada é categorizada para que você possa explorar diferentes temas.
- Link para abrir a piada.

## Filtro por Categoria

Foi feito um filtro por categoria para que se pudesse escolher entre os diversos temas das piadas. Foi usado a API [https://api.chucknorris.io/jokes/categories](https://api.chucknorris.io/jokes/categories) para obter a lista de categorias de piadas disponíveis. Você pode selecionar uma categoria no menu select e ver piadas da categoria escolhida.

## Estrutura do projeto

Dentro da pasta src podemos encontrar:

- Pasta `images` , responsavel por agrupar as imagens utilizadas no projeto.
- Pasta `styles` , responsavel por agrupar os arquivos de estilo css.
- Pasta `components` , responsavel por agrupar os componentes do projeto.
- `header.js` , contem o código do cabeçario da pagina.
- `page.js` , contem o código do restante da pagina, junto com o código que consume a api e trabalha com ela.

<details><summary><b>Create React App</summary>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

</details>
