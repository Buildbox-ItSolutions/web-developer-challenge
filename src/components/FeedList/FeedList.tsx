import { FeedListUl, FeedListContainer, FeedTitle } from "./FeedList.styles";
import FeedItem from "./FeedItem/FeedItem";
import { feedItemsMocked } from "../../lib/mocks";
import { useState } from "react";

export default function FeedList() {
  const [feedItems, setFeedItems] = useState(feedItemsMocked);

  const handleRemoveItem = (id: number) => {
    const filteredFeedItems = feedItems.filter(
      (feedItem) => feedItem.id !== id
    );
    setFeedItems(filteredFeedItems);
  };

  return (
    <FeedListContainer>
      <FeedTitle>Feed</FeedTitle>

      <FeedListUl>
        {feedItems.map((feedItem) => (
          <FeedItem
            key={feedItem.id}
            feedItem={feedItem}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </FeedListUl>
    </FeedListContainer>
  );
}
