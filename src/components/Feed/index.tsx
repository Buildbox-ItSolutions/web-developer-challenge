import React, { useEffect, useState } from 'react';

import { getFeed } from '../../services/feedServices';
import { Feed as FeedType } from '../../types/feed';
import CreatePost from '../CreatePost';

import Post from '../Post';

import { Container, FeedContainer, FeedSpan, PostsContainer } from './styles';

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
      <FeedContainer>
        <FeedSpan>Feed</FeedSpan>
        <PostsContainer>
          {feed.map((item) => (
            <Post {...item} key={item.id} afterClickDelete={setFeed} />
          ))}
        </PostsContainer>
      </FeedContainer>
    </Container>
  );
};

export default Feed;
