import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { CSSVariables } from 'styles/CSSVariables';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <CSSVariables>
      <Routes />
      <GlobalStyle />
    </CSSVariables>
  </BrowserRouter>
);

export default App;
