import tw from 'twin.macro'
import React from "react";
import Section from "../Section";
import { useFeedStore } from '../../data/FeedStore';
import FeedItem from '../FeedItem';

const FeedCaption = tw.p`
`;

const Feed: React.FC<{}> = () => {
    const items = useFeedStore(state => state.feed.items);

    return <Section>
        <FeedCaption>Feed</FeedCaption>
        {items && items.map((item, index) => <FeedItem item={item} key={index} index={index} />)}
    </Section>;
}

export default Feed;