import React from 'react';
import AddPostForm from './components/AddPostForm';
import { Container } from './styles';
import Header from './components/Header';
import { PostProvider } from './contexts/Post';
import Feed from './components/Feed';
import { FeedProvider } from './contexts/Feed';

const App = () => {
  return (
    <FeedProvider>
      <PostProvider>
        <Header />
        <Container>
          <AddPostForm />
          <Feed />
        </Container>
      </PostProvider>
    </FeedProvider>
  );
};

export default App;
