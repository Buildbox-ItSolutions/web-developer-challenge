import React, { useState } from 'react';
import BaseLayout from '../../layouts/BaseLayout';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { IPost } from './Post.types';

function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const addPost = (post: IPost) => setPosts((state) => [post, ...state]);
  const deletePost = (postId: string) =>
    setPosts((state) => state.filter((post) => post.id !== postId));

  return (
    <BaseLayout>
      <PostForm addPost={addPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </BaseLayout>
  );
}

export default Posts;
