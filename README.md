Projecto criado para o desafio da Big Data Health.

## Motivações

Como requisitado pelo desafio, este projeto foi construído em [Next.js](https://nextjs.org/) para construir uma plataforma de e-commerce. A api utilizada para consumo foi a [Fake Store API](https://fakestoreapi.com/docs) devido a recomendação do desafio. O [React Query](https://tanstack.com/query/latest/docs/framework/react/overview) foi utilizado para cache e gerenciamento de estados, apesar do Next.js 14 já suportar cache de requests no server, o React Query é uma ferramenta mais robusta para lidar com o cacheamento. Para estilização do projeto, o [Material UI (mui)](https://mui.com/material-ui/) foi escolhido devido à sua excelente integração com React e praticidade ao utilizar seus componentes já estilizados.

## Requisitos

Primeiramente, é necessário possuir [nodejs](https://nodejs.org/en) instalado em seu ambiente

Possuindo o nodejs instaldo, rode o comando para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador.

## Testes

Para rodar os testes, execute o comando

```bash
npm run cy:run:headed
```

Ou caso queira a interface de controle do cypress

```bash
npm run cy:open
```

## Vercel

O projeto se encontrar hospedado na [Vercel](https://vercel.com/) na seguinte url: https://big-data-health-challenge.vercel.app/

## AVISO!

A Fake Store API não suporta inserção real de dados, logo ações como inserir ou deletar itens do carrinho irão apenas ser gravadas localmente no navegador.
