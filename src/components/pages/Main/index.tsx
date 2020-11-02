import React from 'react';
import { useSelector } from 'react-redux';

import { Header } from 'components/atoms';
import { CreatePost, PostItem } from 'components/molecules';

import { RootState } from 'store/ducks/rootReducer';
import { Container } from './styles';

const Main: React.FC = () => {
  const posts = Array.from(useSelector((state: RootState) => state.posts));

  return (
    <>
      <Container>
        <Header />
        <main>
          <CreatePost />
          {posts.map(post => (
            <PostItem postData={post} key={post.id} />
          ))}
        </main>
      </Container>
    </>
  );
};

export default Main;
