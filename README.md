# Página de Piadas do Chuck Norris

### Bem-vindo à Página de Piadas do Chuck Norris, desenvolvida a partir da api Chuck Norris Jokes.

![localhost_3000_ (1)](https://github.com/EmanuelBitenc/ChuckNorris_Page/assets/63247451/9746a5d1-1390-4534-b8fd-d2abb374d695)

- Funcionando em https://chuck-norris-page.vercel.app/

<details><summary><b>Como Executar o Projeto</summary>

## Como Executar o Projeto

1. Clone este repositório para a sua máquina:

   ```bash
   git clone https://github.com/EmanuelBitenc/ChuckNorris_Page.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd chuck-norris-jokes
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. Acesse o projeto no seu navegador em [http://localhost:3000](http://localhost:3000).

</details>

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
