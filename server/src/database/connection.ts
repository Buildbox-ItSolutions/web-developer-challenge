import sqlite3 from "sqlite3";

export const db = new sqlite3.Database("src/database.db");

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS posts");
  db.run(
    "CREATE TABLE posts (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, mensagem TEXT, imagem TEXT)"
  );
  //INSERT INTO posts (nome, mensagem, imagem) VALUES (Elon Musk, O nome Twitter fazia sentido quando tinha apenas 140 mensagens de caracteres indo e voltando como pássaros tweetando, mas agora você pode postar quase tudo, incluindo várias horas de vídeo,https://conteudo.imguol.com.br/c/noticias/ec/2022/11/23/elon-musk-ceo-da-tesla-sorri-durante-discurso-na-noruega-realizado-em-agosto-de-2022-1669218520582_v2_1x1.jpg)
  db.run("INSERT INTO posts (nome, mensagem, imagem) VALUES (?, ?, ?)", [
    "Elon Musk",
    "O nome Twitter fazia sentido quando tinha apenas 140 mensagens de caracteres.twitter, mas agora você pode postar quase tudo, incluindo várias horas de mínimo.",
    "https://conteudo.imguol.com.br/c/noticias/ec/2022/11/23/elon-musk-ceo-da-tesla-sorri-durante-discurso-na-noruega-realizado-em-agosto-de-2022-1669218520582_v2_1x1.jpg",
  ]);
  db.run("INSERT INTO posts (nome, mensagem, imagem) VALUES (?, ?, ?)", [
    "Akita",
    "Alguém brincou que eu tava baixando a internet e na prática, estou 😂 Já tenho meu netflix particular mas posso baixar muito mais coisa, incluindo OpenStreetMaps (tipo google maps open source) pra ter acesso offline. Dá pra baixar Wikipedia WikiHow ArchiWiki e mutio mais pra ter offline kkk",
    "https://pbs.twimg.com/profile_images/1362924757537193990/HhJV6tZe_400x400.jpg",
  ]);
  db.run("INSERT INTO posts (nome, mensagem, imagem) VALUES (?, ?, ?)", [
    "Mark Zuckerberg",
    "Ops eu não tenho Twitter ou X tanto faz mas eu tenho outras 3 Redes sociais mesmo 😎",
    "https://s2-g1.glbimg.com/5SMHZFKzLo-h2XfbiQbOsC9nezw=/0x0:1700x1255/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/x/4/QZQfV4RUqLCCfq5wtzjA/mark-zuckerberg.jpg",
  ]);
});
