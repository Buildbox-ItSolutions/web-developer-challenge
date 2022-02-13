import React, { useEffect, useState } from 'react';

import { getFeed } from '../../services/feedServices';
import { Feed as FeedType } from '../../types/feed';
import CreatePost from '../CreatePost';

import { Container } from './styles';

const Feed: React.FC = () => {
  const [feed, setFeed] = useState<FeedType[]>([]);

  useEffect(() => {
    getFeed().then(({ feed: data }) => {
      setFeed(data);
    });
  }, []);

  return (
    <Container>
      <CreatePost onSuccessSubmit={setFeed} />
      {feed.map(({ id, message, name, photoUrl }) => (
        <div key={id}>
          <img src={photoUrl || ''} alt={`foto do ${name}`} />
        </div>
      ))}
    </Container>
  );
};

export default Feed;
