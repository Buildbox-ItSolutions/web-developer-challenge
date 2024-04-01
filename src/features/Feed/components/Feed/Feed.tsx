import React from 'react'
import { FeedStyled } from './Feed.style'
import { Post } from '../../interfaces/Post';
import PostCard from '../PostCard/PostCard';

interface IFeed{
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

function Feed({posts, setPosts}: IFeed) {
  return (
    <FeedStyled>
        {/* Fazer um skeleton bonitinho */}
        {posts.map((post) =>(
            <PostCard post={post} setPosts={setPosts}/>
        ))}
        <h1 className='feedTitle'>Feed</h1>
    </FeedStyled>
  )
}

export default Feed;