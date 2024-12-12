import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'pages/App';
import { PostContextProvider } from 'common/context/Post';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </React.StrictMode>,
);
