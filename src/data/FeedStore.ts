import create from 'zustand'
import Feed from "../model/Feed";
import FeedItem from '../model/FeedItem';
import FeedFactory from "./factory/FeedFactory";
import FeedState from "./FeedState";

export const useFeedStore = create<FeedState>((set) => ({
    feed: FeedFactory(),
    addItem: (item: FeedItem) => set(state => ({
        feed: { items: [...state.feed.items, item]}
    })),
    removeItem: (index: number) => set(state => {
        console.log(index)
        return {
            feed: {
                items: state.feed.items.filter((_, idx) => idx !== index)
            }
        };
    })
}))
