import React, { useEffect } from 'react';

import { getFeed } from '../../services/feedServices';
import CreatePost from '../CreatePost';

import { Container } from './styles';

const Feed: React.FC = () => {
  useEffect(() => {
    getFeed().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <Container>
      <CreatePost />
    </Container>
  );
};

export default Feed;
