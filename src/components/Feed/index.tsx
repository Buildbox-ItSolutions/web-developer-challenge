import { useSelector } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';

import Post from '@/components/Post';
import Fade from '@/components/Fade';
import { FeedContainer, FeedText } from './styled';

import { RootState } from '@/reducers';

export default function Feed() {
  const posts = useSelector((state: RootState) => state.posts);

  return (
    <FeedContainer>
      <FeedText as="h1" fontWeight="500">
        Feed
      </FeedText>
      <TransitionGroup component={null}>
        {posts.map((post) => (
          <Fade key={post.id}>
            <Post post={post} />
          </Fade>
        ))}
      </TransitionGroup>
    </FeedContainer>
  );
}
