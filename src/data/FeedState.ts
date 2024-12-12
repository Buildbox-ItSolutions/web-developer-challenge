import Feed from "../model/Feed";
import FeedItem from "../model/FeedItem";

export default interface FeedState {
    feed: Feed;
    addItem: (item: FeedItem) => void;
    removeItem: (index: number) => void;
}