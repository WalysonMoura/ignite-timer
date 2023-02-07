####################################################################################################
03. Criação do projeto: 
   [Commit: Estrutura da aplicação - Criação do projeto](https://github.com/rocketseat-education/02-ignite-timer/commit/0badbe7)

Nessa aula vamos iniciar a estrutura do nosso projeto utilizando o [Vite](https://vitejs.dev/) junto com o [TypeScript](https://www.typescriptlang.org/), e limpando arquivos desnecessários.

####################################################################################################
04. Styled Components: 
   [Commit: Estrutura da aplicação - Styled Components](https://github.com/rocketseat-education/02-ignite-timer/commit/72123cd)

Nesse projeto, nós vamos utilizar o [Styled Components](https://styled-components.com/) para criar as estilizações da nossa aplicação.

O Styled Components é uma biblioteca de CSS-in-JS que permite que a gente utilize o CSS dentro do JavaScript e em um formato parecido com os do React, adicionando muitas funcionalidades à estilização da nossa aplicação.

Vamos ver nessa aula como configurar o Styled Components, seus principais conceitos e começar a estrutura de estilização da aplicação.

####################################################################################################
05. Configurando temas: 
   [Commit: Estrutura da aplicação - Configurando temas](https://github.com/rocketseat-education/02-ignite-timer/commit/c222ba7)

Com o Styled Components, nós conseguimos criar temas para estilizar nossa aplicação de formas diferentes de acordo com o tema escolhido.

Nessa aula vamos fazer um setup inicial de um tema padrão para nossa aplicação, que será onde iremos configurar as cores que vamos utilizar no futuro.

####################################################################################################
06. Tipagem de temas: 
   [Commit: Estrutura da aplicação - Tipagem de temas](https://github.com/rocketseat-education/02-ignite-timer/commit/8349b02)

Para trazer uma melhor integração com o TypeScript, nessa aula vamos ver como sobrescrever a tipagem padrão de tema do Styled Components, utilizando o `defaultTheme` que foi criado anteriormente.

####################################################################################################
07. Estilos globais: 
   [Commit: Estrutura da aplicação - Estilos globais](https://github.com/rocketseat-education/02-ignite-timer/commit/928b4e7)

É comum em aplicações web termos configurações de estilos globais. O Styled Components também nos ajuda com isso, por meio de uma função chamada `createGlobalStyle`, que iremos aprender a utilizar nessa aula.

####################################################################################################
08. Cores & fonte: 
   [Commit: Estrutura da aplicação - Cores & fonte](https://github.com/rocketseat-education/02-ignite-timer/commit/29192e2)

Nessa aula, vamos configurar as fontes e cores que serão utilizadas de verdade pela nossa aplicação.

Abaixo, você pode copiar o trecho de código com as cores que serão definidas no tema para a estilização da aplicação:

```tsx
export const defaultTheme = {
  white: '#FFF',

  'gray-100': '#E1E1E6',
  'gray-300': '#C4C4CC',
  'gray-400': '#8D8D99',
  'gray-500': '#7C7C8A',
  'gray-600': '#323238',
  'gray-700': '#29292E',
  'gray-800': '#202024',
  'gray-900': '#121214',

  'green-300': '#00B37E',
  'green-500': '#00875F',
  'green-700': '#015F43',

  'red-500': '#AB222E',
  'red-700': '#7A1921',

  'yellow-500': '#FBA94C',
}
```

####################################################################################################
09. Configurando ESLint: 
   [Commit: Estrutura da aplicação - Configurando ESLint](https://github.com/rocketseat-education/02-ignite-timer/commit/128eea4)

O ESLint permite que a gente configure diversas regras para padronizar a organização do nosso código.

Isso vai desde como deve ser o comportamento de quebras de linha, ponto-e-vírgula, vírgulas e até mesmo regras para nomeação de variáveis ou [plugins que ajudam](https://www.npmjs.com/package/eslint-plugin-react-hooks) a gente à não esquecer algumas regras do React.

Nessa aula, veremos como configurar o ESLint utilizando o plugin de padrões que utilizamos na Rocketseat, sem a necessidade de fazer uma série de configurações manuais.

Caso queira ver as configurações utilizadas nesse plugin, você pode acessar o repositório oficial com o código dessas configurações para o React: [https://github.com/Rocketseat/eslint-config-rocketseat/blob/main/react.js](https://github.com/Rocketseat/eslint-config-rocketseat/blob/main/react.js)

O ESLint possui uma enorme lista de rules (regras) que você pode configurar, e todas estão disponíveis através desse link da documentação oficial: [https://eslint.org/docs/rules/](https://eslint.org/docs/rules/)

Caso queira ver mais sobre como configurar o ESLint manualmente, você pode ver o guia de Getting Started do ESLint disponível no seguinte link: [https://eslint.org/docs/user-guide/getting-started](https://eslint.org/docs/user-guide/getting-started)
