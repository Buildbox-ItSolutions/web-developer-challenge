import React from 'react';
import { FeedContainer } from './styles';
import FeedItem from '../FeedItem';
import { useFeed } from '../../contexts/Feed';
import { Spinner, EmptyFeedMessage } from './styles';

const Feed = () => {
  const { posts } = useFeed();
  const renderFeedItems = () => {
    if (posts?.length === 0)
      return (
        <EmptyFeedMessage>
          Empty feed... Try adding something new!!!{' '}
        </EmptyFeedMessage>
      );
    return posts?.map((post) => <FeedItem {...post} key={post._id} />);
  };

  const renderSpinner = () => {
    return <Spinner />;
  };

  return (
    <FeedContainer>
      Feed
      <div>{posts ? renderFeedItems() : renderSpinner()}</div>
    </FeedContainer>
  );
};

export default Feed;
