import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { dataStore } from './data/data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App dataStore={dataStore} />
  </React.StrictMode>
);
