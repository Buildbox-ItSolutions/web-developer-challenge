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

#### TECNOLOGIAS APLICADAS

| DESCRIÇÃO   | VERSÃO    |                                                   |
| ----------- | --------- | ------------------------------------------------- |
| React JS    | `v17.0.2` | [Leia +](https://pt-br.reactjs.org/)              |
| Vite        | `v2.8.0`  | [Leia +](https://vitejs.dev/)                     |
| Typescript  | `v4.5.4`  | [Leia +](https://www.typescriptlang.org/)         |
| Json Server | `v7.5`    | [Leia +](https://github.com/typicode/json-server) |
| Formik      | `v2.2.9`  | [Leia +](https://formik.org/)                     |

Para execução da api no front, foi utilizado Json Server para simular requisições.

### EXECUTANDO O PROJETO

Para executar o projeto, siga essencialmente estes passos:

- Clone este respositório:
  `git clone https://github.com/jhordanjes/web-developer-challenge`
- Navegue até o diretório _webapp_:
  `cd webapp`

- Execute o seguinte comando para inicializar o frontend:
  `yarn dev`

- Execute o seguinte comando para inicializar o JSON-Server:
  `npx json-server --watch db.json --port 3333 --delay 1000`

_Desenvolvido por [Jhordan Oliveira](https://github.com/jhordanjes)._
