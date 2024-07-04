export interface IFeedStore {
  feeds: IFeed[];
  createFeed: (feed: IFeed) => void;
  removeFeed: (feedId: string) => void;
}

export interface IFeed {
  id: string;
  name: string;
  message: string;
  image: string;
}
