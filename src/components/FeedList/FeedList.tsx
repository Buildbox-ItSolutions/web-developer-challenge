import { FeedListUl, FeedListContainer, FeedTitle } from "./FeedList.styles";
import FeedItem from "./FeedItem/FeedItem";
import { useFeedItemsStore } from "../../store/feedListStore";

export default function FeedList() {
  const feedItems = useFeedItemsStore((state) => state.feedItems);
  const handleRemoveItem = useFeedItemsStore((state) => state.removeFeedItem);

  return (
    <FeedListContainer>
      <FeedTitle>Feed</FeedTitle>

      <FeedListUl>
        {feedItems.length > 0
          ? feedItems.map((feedItem) => (
              <FeedItem
                key={feedItem.id}
                feedItem={feedItem}
                handleRemoveItem={handleRemoveItem}
              />
            ))
          : null}
      </FeedListUl>
    </FeedListContainer>
  );
}
