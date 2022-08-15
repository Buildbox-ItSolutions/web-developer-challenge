import React, { FC, useState } from 'react';
import './App.css';
import Feed from './layouts/Feed';

import testImg from './assets/2.jpg';

const App : FC = () => {
  return (
    <div className="App">
        {/*
          TODOS:
            I - Header, contendo apenas o logo e slogan, centralizados
            II - área de postagens
              1. bloco para adição de novo post, contendo:
                a. thumbnail - aparece um pequenino botão alaranjado com o símbolo de lixeira ao lado,
                    quando preenchido o input
                b. nome do autor (input texto)
                c. mensagem (textarea)
                d. pseudo-botão 'Descartar'; texto sublinhado; 'unstyled'/'ghost'
                e. botão 'Publicar' - fica verde quando o post está correto para ser enviado,
                    caso contrário, fica cinza, 'esmaecido'
              2. Feed contendo posts de exemplo e novos a serem adicionados.
                  Cada post deve conter:
                  a. à esquerda (cerca de 20%): a foto thumbnail
                  b. restante (cerca de 80%):
                    i. texto da mensagem
                    ii. pequeno, abaixo: 'Enviado por' + nome do autor
                  c. canto superior direito: um pequenino botão alaranjado com o símbolo de 'X'
        */}
        <Feed></Feed>
    </div>
  );
}

export default App;
