import React from 'react';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import PostList from './components/PostList';
import Post from './components/Post';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <PostList />
      <Post />
    </>
  );
};

export default App;
