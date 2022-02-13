import { Post } from '../Post';
import { usePosts } from '../../hooks/usePosts';
import { FeedContainer, EmptyFeed } from './styles';
import { useEffect } from 'react';

export const Feed = () => {
  const { posts } = usePosts();

  useEffect(() => {
    console.log({ posts });
  }, [posts]);

  return (
    <FeedContainer>
      <span>Feed</span>

      {posts.length === 0 ? (
        <EmptyFeed>
          <h2>Sem publicações!</h2>
          <p>Preencha o formulário acima e compartilhe algo.</p>
        </EmptyFeed>
      ) : (
        posts.map((post) => <Post post={post} key={post.image} />)
      )}
    </FeedContainer>
  );
};
