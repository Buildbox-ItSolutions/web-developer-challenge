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
        <h1 className='feedTitle'>Feed</h1>
        <div className='postsContainer'>
          {posts.map((post) =>(
              <PostCard post={post} setPosts={setPosts}/>
          ))}
        </div>
    </FeedStyled>
  )
}

export default Feed;