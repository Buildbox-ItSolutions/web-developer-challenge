import React from 'react';
import { FeedContainer, H2 } from './styles';
import FeedItem from '../FeedItem';
import { useSelector, shallowEqual,  } from 'react-redux';
import { removePost } from '../../store/actionPosts';

const Feed:React.FC = () => {
    const posts: readonly IPost[] = useSelector(
        (state: PostState) => state.posts,
        shallowEqual
    );

    return (
        <FeedContainer>
            <H2>Feed</H2>
            {posts.map((post:IPost) => {
                return (
                    <FeedItem post={post} removePost={removePost} key={post.id}/>
                );
            })}
        </FeedContainer>
    );
};

export default Feed;