import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PostsProvider } from './context/PostsContext';

ReactDOM.render(
  <React.StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
