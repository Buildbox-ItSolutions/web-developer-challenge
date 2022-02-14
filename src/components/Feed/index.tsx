import { Post } from '../Post';
import { usePosts } from '../../hooks/usePosts';
import { FeedContainer, EmptyFeed } from './styles';
import { useEffect } from 'react';

export const Feed = () => {
  const { posts, setPosts } = usePosts();

  useEffect(() => {
    const postsOnFeed = localStorage.getItem('posts-buildbox-feed');

    if (postsOnFeed) {
      setPosts(JSON.parse(postsOnFeed));
    }
  }, []);

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
