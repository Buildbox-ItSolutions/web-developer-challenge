import React, { useState } from 'react';
import PostItem from '../PostItem';
import { PostsListsContainer } from './styles';

const PostsList = () => {
  const [data, setData] = useState();

  return (
    <PostsListsContainer>
      <PostItem />
    </PostsListsContainer>
  )
}


export default PostsList