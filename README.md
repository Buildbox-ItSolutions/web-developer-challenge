# Aplicação React com Next.js, Styled Components e Redux

Esta é uma aplicação simples desenvolvida com Next.js, React, Styled Components e Redux. A aplicação inclui um tema dark e utiliza localStorage para persistência dos dados.

# Acesso à Aplicação

Você pode acessar a aplicação online [aqui](https://buildbox-web-challenge.vercel.app/)

## Instale as dependências

cd buildbox-web-challenge
npm install

## Execute a aplicação
npm run build
npm run start

## Funcionalidades

- Exibição de uma lista de itens.
- Adição de novos itens.
- Remoção de itens existentes.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Redux](https://redux.js.org/)

## Estrutura do Projeto

- `app/`: Contém as páginas da aplicação.
- `components/`: Componentes reutilizáveis.
- `lib/`: Configurações e definições do Redux.
- `styles/`: Estilos globais e temas da aplicação.
- `storage/`: Funções relacionadas à persistência de dados, como leitura e escrita no localStorage.
- `providers/`: Configurações dos provedores utilizados na aplicação, como o provedor de tema (Styled Components) e o provedor de store (Redux).

## Persistência de Dados

A aplicação utiliza o `localStorage` para armazenar os dados localmente no navegador do usuário. Isso permite que os dados persistam mesmo após o fechamento do navegador.
