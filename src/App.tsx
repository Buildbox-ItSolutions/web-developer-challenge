import React from 'react';
import { Feed } from './components/Feed';
import { Header } from './components/Header';
import { NewPost } from './components/NewPost';

function App() {
  return (
    <>
      <Header />
      <NewPost />
      <Feed />
    </>
  );
}

export default App;
