import React, { useState } from 'react'
import { FeedPageStyled } from './FeedPage.style'
import PostForm from '../components/PostForm/PostForm'
import Feed from '../components/Feed/Feed'
import { Post } from '../interfaces/Post';
import { initialPosts } from '../../../assets/initialState';


function FeedPage() {

  const [posts, setPosts] = useState<Post[]>(initialPosts);

  return (
    <FeedPageStyled>
        <PostForm setPosts={setPosts}/>
        <Feed posts={posts} setPosts={setPosts}/>
    </FeedPageStyled>
  )
}

export default FeedPage