import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Toast from './components/Toast/Toast';

import './services/firebase'

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Toast /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

