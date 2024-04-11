import React from 'react';
import FeedComponent from './Post';
import { ContainerGroupFeeds, Text } from './styles';

interface FeedProps {
  feeds: { photo: string; name: string; text: string; }[];
  setFeeds: React.Dispatch<React.SetStateAction<{ photo: string; name: string; text: string; }[]>>;
}

function Feed({ feeds, setFeeds }: FeedProps): JSX.Element {
 const removeFeed = () => {
  if (feeds.length >= 3) {
    setFeeds(prevFeeds => {
      const newArray = prevFeeds.slice(1);
      return newArray;
    });
  }
}

  return (
    <ContainerGroupFeeds>
            <Text>Feed</Text>
            <>
                {feeds.map((feed, index) => (
                    <FeedComponent
                    key={index}
                    profile={feed.photo}
                    name={feed.name}
                    text={feed.text}
                    onDeleteClick={index === 0? removeFeed : undefined}
                    addCursor={index === 0}
                    />
                ))}
            </>
    </ContainerGroupFeeds>
  );
}

export default Feed;