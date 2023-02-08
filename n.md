
# 🛠️ Tecnologias/Ferramentas ultilizadas

* ### NPM  de instalação das tecnologias mais usadas por mim

![mock1](https://user-images.githubusercontent.com/71772559/113493479-eceeda80-94b5-11eb-94ea-59e50e56a31f.png)

<details>
 <summary><h1>Front-End <img src="https://github.com/rafaballerini/ReactHooks/blob/master/public/React.svg.png?raw=true" width="70px"></h2></summary>

<details>
 <summary><h2>Ambiente Front-End</h2></summary>

* ## Instalação React / Next.JS / Styled-Components

```
npm create next-app --nomeProjeto with-styled-components with-styled-components-app --typescript
```

```
npm i next@13 
```

```
npm i  next react react-dom    
```

* ## ESlint

```
 npm i eslint -D   
```

```
 npm init @rocketseat/eslint-config -D  
```

Para utilizaçâo é necessário a criação do arquivo `eslint.json` na raiz do projeto com as configurações a seguir:  

```.json
  {
  "extends": "@rocketseat/eslint-config/react"
  }
```

Para utilizaçâo é necessário adicionar o script no arquivo `package.json` na raiz do projeto com as configurações a seguir:

```.json
 {
   "scripts": {
     "lint": "eslint src --ext .ts,.tsx --fix"
   }
 }
 ```

 Basta rodar o comando no terminal:

 ```
npm run lint
```

</details>

* ## TypeScript  

```
npm i  typescript -D 
```

```
npm i  typescript @types/react @types/node -D 

```

* ## Style-components

```
npm i styled-components --save
```

```
npm i  -D babel-plugin-styled-components
```

 Para utilizaçâo do Styled Components com Next é necessário a criação do arquivo `babel.config.js` na raiz do projeto com as configurações a seguir:  

<details>
 <summary><h2>Estilização</h2></summary>

```.json
  {
  "presets": [
    "next/babel"
  ],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ]
  ]
}
```

<details>

<details>
 <summary><h2>Rotas</h2></summary>

 ```
  npm i  react-router-dom
```

<details>

<details>
 <summary><h2>Formulários</h2></summary>
<details>

* ## React icons

[Buscar Icones](https://react-icons.github.io/react-icons/)

```
  npm i  react-icons --save 
```

* ## React Reveall

```
npm i  react-awesome-reveal @emotion/react --save
```

* ## React Tilt [site](https://mkosir.github.io/react-parallax-tilt/?path=/story/react-parallax-tilt--default)

```
npm i  react-parallax-tilt
```

* ## Animate.css

```
npm i  animate.css --save 
```

* ## Spline 3D

```
npm i  @splinetool/react-spline @splinetool/runtime
```

</details>

<details>
 <summary><h1>Back-End 💻</h2></summary>

<details>
 <summary><h2>ambiente Node.js</h2></summary>

```
 npm init -y   
```

* ## TSX

```
 npm i tsx -D   
```

* ## TypeScript

```
npm add typescript @types/express @types/node -D 
```

* ### Configuração do TypeScript

```
 tsc --init 
```

```
 tsc
```

* ## compilar  TypeScript

```
npm add ts-node-dev -D
```

## compilar TypeScript (Build)

* ###  tsup

```
npm i tsup -D
```

* ## ESlint

```
 npm i eslint -D   
```

```
 npm init @eslint/config   
```

  ```.json
 {
   "scripts": {
     "start": "tsx src/server.ts",
     "dev": "tsx watch src/server.ts",
     "build": "tsup src",
     "test": "viteste"
   }
 }
 ```

</details>

<details>
 <summary><h2>Framework</h2></summary>

* ###  Express
  
    ```
     npm i express   
    ```

    ```
     npm i  @types/express -D 
    ```
  
* ###  Fastify
  
    ```
     npm i express   
    ```

    ```
     npm i  #fastify/cors
    ```
  
* ###  Nest.JS
  
   ```
    npm i express   
   ```

   ```
     npm i  @types/express -D 
   ```

</details>

<details>
 <summary><h2>Testes</h2></summary>

* ###  Viteste

 ```
  npm i viteste -D
 ```

</details>

<details>
 <summary><h2>ORM</h2></summary>
* ### Type ORM

#### -> Com PostgreSQL

```
 yarn  typeorm reflect-metadata pg
```

#### Criando Migrations

```
 yarn add typeorm migration:create -n CreateCategories
```

* ### Prisma

```
 npm i -D prisma
```

```
 npm i @prisma/client
```

#### Iniciando Database

```
 npx prisma init --datasource-provider sqlite
```

#### Criando Migrations

 ```
 npx prisma migrate dev
```

#### Prisma Studio

```
 npx prisma studio
```

#### Gerador de diagrama de relacionamento com entidades Prisma

```
 npm i -D prisma-erd-generator @mermaid-js/mermaid-cli
```

Cole esse código no arquivo  `schema.prisma` :

 ```.js
  generator erd {
     provider = "prisma-erd-generator"
  }
 ```

 ```
 npx prisma generate
```

* ## Ejs

```
 express nomeProjeto --ejs   
```

* ## Sequelize

```
 yarn add sequelize
```

```
yarn add sequelize-cli -D
```

### Models co sequelize

```
yarn sequelize init:models
```

</details>

<details>
 <summary><h2>Database</h2></summary>

* ## MySQL

```
yarn add install mysql2
```

</details>

<details>
<summary><h2>Database</h2></summary>

* ## axios

```
 yarn add --save axios   
```

</details>

<details>
<summary><h2>Database</h2></summary>

* ## GraphQL

```
 yarn add type-graphql graphql apollo-server class-validator reflect-metadata
 
```

```
 yarn add type-g
 
```

</details>

# CMS

* ## Prismic

```
 yarn add @prismicio/react @prismicio/client
``
 
</details> 





# Ferramentas Extras

* [CSS Buttons](https://uiverse.io)
* [Neumorphism](https://neumorphism.io/#e0e0e0)
* [Efeito Vidro](https://css.glass/)
* [Testes](https://www.refraction.dev/)
* [Box-Shadow CSS Generator](https://html-css-js.com/css/generator/box-shadow/)
* [FANCY-BORDER-RADIUS](https://9elements.github.io/fancy-border-radius/)
