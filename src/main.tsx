import React from 'react';
import ReactDOM from 'react-dom/client';
import Feed from './pages/feed/Feed.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Feed />
  </React.StrictMode>,
)
