# web-developer-challenge
## Meus dados

**Nome:** Pedro Monteiro  

**E-mail:** pedrohm95@hotmail.com  

**Telefone:** (35) 99755-1565  

**LinkedIn:** linkedin.com/in/pemonter  


## Tecnologias utilizadas

* Axios
* JSON Server
* React
* Styled Components
* TypeScript
* Vite

## Procedimentos para execução deste projeto

Inicialmente é necessário clonar esse repositório para sua máquina, utilizando o seguinte comando: 

```
git clone https://github.com/pemonter/web-developer-challenge.git
```

Após terminado o clone do projeto, siga os seguintes passos no terminal:
```
cd web-developer-challenge
npm i
```

Dessa forma os pacotes necessários para execução do projeto estarão instalados via npm.

Para realizar o upload de fotos no site [imgbb](imgbb.com), é necessário gerar uma **API_KEY** no seguinte link: https://api.imgbb.com/.

Após gerar a key, crie um arquivo ```.env.local``` na raiz do projeto, contendo o seguinte:

```
VITE_IMGBB_KEY=SUA_CHAVE_AQUI
```

Feito isso é hora de iniciar o JSON-Server, basta executar:

```
npm run dev:server
```

Após a iniciar o server, é hora de executar o projeto:

``` 
npm run dev
```

Então será apresentado o endereço localhost para acesso ao projeto:

http://localhost:5173/
