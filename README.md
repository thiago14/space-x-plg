
# **Projeto do Desafio - Space X + teste A**

Este projeto mostra os lançamentos de foguetes da Space X. Há 4 infomações. Último lançamento, próximo lançamento, últimos lançamentos e próximos lançamentos.

A API pega estas infomações de uma rota externa e devolve um objeto ou uma lista de objetos com as informações.
- Repositório utilizado : [SpaceX-API](https://github.com/r-spacex/SpaceX-API/tree/master/docs/launches/v4)

O CLIENT consome a API e monta 4 cards com as respectivas informações numa unica pagina. Tambem há um teste A/B onde a variação é a imagem de background e a cor do título são alterados

## **API**

- Linguagem: Nodejs + Typescript
- Detalhes: Foi usada a estrutura orientada por dominio e testes unitários automatizados, injeção de dependências e arquitetura limpa.
- Para executar o projeto siga os seguintes passos:

```
git pull
cd /api
yarn ou npm i
npx nodemon src/main.ts
```

### Pontos a serem melhorados

- Adicionar arquivo de variaveis de ambiente e colocar as urls e outras configurações para remover do codigo e do git

## **CLIENTE**

- Linguagem: ReactJs
- Detalhes: Foi usado ReactJs como framework + Typescript + Vite. Para o teste A/B foi utilizado o Google Optimize. A estrutura usada foi seguindo os mesmos conceitos da API.
- Para executar o projeto siga os seguintes passos:

```
git pull
cd /client
yarn ou npm i
yarn dev
```

### Pontos a serem melhorados
 - Criar testes automatizados;
 - Adicionar arquivo de variaveis de ambiente e colocar as urls e outras configurações para remover do codigo e do git
 - Melhorar a injeção de dependências usando contexto ou alguma outra forma que o React forneça;