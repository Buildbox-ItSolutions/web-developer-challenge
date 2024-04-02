'use client';

import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from "@/features/posts/postsSlice";
import { RootState } from '@/store/store';
import { Post } from '@/components/Post';

import * as S from './styles';

export const PostList = () => {
  const dispatch = useDispatch();

  const handlePostDeletion = (postId: string) => dispatch(deletePost(postId));

  const posts = useSelector((state: RootState) => state.posts.posts);

  return (
    <S.MainContainer>
      <S.Title>Feed</S.Title>

      <S.PostSection>
        {posts.map((post) => (
          <Post
            key={post.id}
            authorImage={post.authorImage}
            authorName={post.authorName}
            message={post.message}
            handleClick={() => handlePostDeletion(post.id)}
          />
        ))}
      </S.PostSection>
    </S.MainContainer>
  );
};
