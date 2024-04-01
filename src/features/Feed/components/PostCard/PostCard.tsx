import React from 'react'
import { Post } from '../../interfaces/Post';

interface IPostCard{
    post: Post;
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}
function PostCard({post, setPosts}: IPostCard) {
  return (
    <div>PostCard</div>
  )
}

export default PostCard