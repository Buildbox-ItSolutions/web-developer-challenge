import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalTheme from './global'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalTheme />
    <App />
  </React.StrictMode>
);
