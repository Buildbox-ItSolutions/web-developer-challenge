import React from 'react';
import CreatePost from '../CreatePost';

import { Container } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <CreatePost />
    </Container>
  );
};

export default Feed;
