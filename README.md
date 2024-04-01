# web-developer-challenge

Olá!

Este desafio consiste em identificar seu conhecimento em desenvolvimento Web, portanto esperamos que você tente resolve-lo usando toda a sua capacidade e conhecimento da tecnologia.

O Desafio é o seguinte:

Monte uma página utilizando React.js que contenha uma lista de posts com a possíbilidade de adicionar e remover. Cada post deve conter nome, mensagem e foto. Não é necessário fazer o Back-End, os dados podem estar apenas em tempo de execução no Front-End.

**Projetos que encontramos Typescript, Styled Compoments, Responsividade, terão pontos adicionais!**

Tente colocar ao máximo todos os recursos técnicos que você conhece, padrão de arquitetura, boas práticas de código, bibliotecas, etc.

Você deve fazer um Fork deste repositório e solicitar um Pull Request com seu nome, email e celular na descrição para nossa avaliação e contato.

Abaixo segue o link do XD com protótipo navegável para conhecer a dinâmica da interface e os dados para Logar no Zeplin para ter acesso ao Design com suas medidas.

## Interface XD

https://adobe.ly/2BVcy5C

## Design - Zeplin

https://app.zeplin.io/login

E-mail - buildbox.guest@gmail.com

Senha - JhZ5dAPG

![footer](https://cdn-images-1.medium.com/max/2600/1*_DOHv30w-0eI-Ysz5U47Yg.png)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
