import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';

import Providers from './providers';

import { BrowserRouter } from 'react-router-dom';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Providers>
    <BrowserRouter>
      <React.StrictMode>
        <GlobalStyle />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Providers>
);

reportWebVitals();
