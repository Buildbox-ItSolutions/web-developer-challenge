import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PostsProvider } from './context/FeedContext';
import { GlobalStyle } from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
      <PostsProvider>
        <App />
      </PostsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);