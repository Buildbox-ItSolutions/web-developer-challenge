<a name="readme-top"></a>

<br />
<div align="center">

  <p align="center">
        Desafio técnico buildbox
  </p>
  
</div>

<br>

<details>
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#Proposta">Proposta</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#notas-de-destaque">Notas de destaque</a></li>
        </ul>
    </li>
    <li><a href="#utilização">Utilização</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<br><br>

## Proposta

Monte uma página utilizando React.js que contenha uma lista de posts com a possíbilidade de adicionar e remover. Cada post deve conter nome, mensagem e foto. Não é necessário fazer o Back-End, os dados podem estar apenas em tempo de execução no Front-End.

Projetos que encontramos Typescript, Styled Compoments, Responsividade, terão pontos adicionais!

Tente colocar ao máximo todos os recursos técnicos que você conhece, padrão de arquitetura, boas práticas de código, bibliotecas, etc.

Você deve fazer um Fork deste repositório e solicitar um Pull Request com seu nome, email e celular na descrição para nossa avaliação e contato.

Abaixo segue o link do XD com protótipo navegável para conhecer a dinâmica da interface e os dados para Logar no Zeplin para ter acesso ao Design com suas medidas.

<br>

## Interface XD

https://adobe.ly/2BVcy5C

<br>

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

### Feito com

<div align="center">

![Styled Components](https://img.shields.io/badge/styledcomponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white)

</div>

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Notas de destaque

</br>

Contém:
✅ Responsividade
✅ Validação de campos
✅ Uso do banco de dados
✅ Uso de server actions para envio de dados

Demorei um pouquinho devido a briga com o file input, acreditei firmemente que seria possível usar o ```watch``` para gerenciar o preview do arquivo e o setar o valor no envio, porém sem o input estar controlado isso não funciona muito bem pelo fato de ser o input de arquivos, funciona bem diferente ☹️

Acredito que há diversas OUTRAS formas de solucionar o desafio com e sem backend:
- redux
- contextapi
- uplift state com ou sem composition pattern (fragmentar pra evitar prop drilling)
- utilizar rotas ao invés de actions
- backend dedicado que use o filesistem (fs) pra salvar os arquivos
- usar uma api para enviar a imagem para uma cdn e retornar o link da imagem (ao invés de armazenar ela no server ou no banco de dados)

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Utilização

Após clonar, baixar ou fazer um fork, utilize o comando abaixo para instalar as dependências do projeto:

```shell
npm install
```

Adicione e preencha sua varável de ambiente em seu arquivo ```.env``` com a informação da conexão para o seu banco de dados.

Depois disso adicione os dados em seu banco de dados com o comando:
```shell
prisma migrate dev --name init
```

Depois só criar ou remover quantas postagens desejar!

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>

## Contato

💌 Para me mandar uma mensagem basta usar um dos botões abaixo!<br>

<a href = "mailto:edilanbusiness@gmail.com" target="_blank"><img src="https://img.shields.io/badge/-gmail-333333?style=flat&logo=gmail&logoColor=EA4335" height="25"></a>
<a href="https://www.linkedin.com/in/edilan-ribeiro-santos" target="_blank"><img src="https://img.shields.io/badge/-linkedin-333333?style=flat&logo=linkedin&logoColor=0A66C2" height="25"></a>
<a href="https://whatsa.me/5561983769634/?t=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20seu%20GitHub!" target="_blank">
<img src="https://img.shields.io/badge/-whatsapp-333333?style=flat&logo=whatsapp&logoColor=25D366" height="25"></a>

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>
