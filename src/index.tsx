import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <GlobalStyle />
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
