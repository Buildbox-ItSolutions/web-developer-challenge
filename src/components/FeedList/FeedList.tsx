import { FeedListUl, FeedListContainer, FeedTitle } from "./FeedList.styles";
import FeedItem from "./FeedItem/FeedItem";

export default function FeedList() {
  return (
    <FeedListContainer>
      <FeedTitle>Feed</FeedTitle>

      <FeedListUl>
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </FeedListUl>
    </FeedListContainer>
  );
}
