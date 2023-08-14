# Página de Piadas do Chuck Norris

Bem-vindo à Página de Piadas do Chuck Norris! Desenvolvida a partir da api Chuck Norris Jokes.

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
 - Pasta `images`, responsavel por agrupar as imagens utilizadas no projeto.
 - Pasta `styles`, responsavel por agrupar os arquivos de estilo css.
 - Pasta `components`, responsavel por agrupar os componentes do projeto.
  - `header.js` contem o código do cabeçario da pagina.
  - `page.js` contem o código do restante da pagina, junto com o código que consume a api e trabalha com ela.

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

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

</details>
