import type { Post as PostType } from '@/types';
import { TransitionGroup } from 'react-transition-group';
import Post from '@/components/Post';
import Fade from '@/components/Fade';
import { FeedContainer, FeedText } from './styled';

type Props = {
  posts: PostType[];
  handleRemovePost: (id: string) => void;
};

export default function Feed({ posts, handleRemovePost }: Props) {
  return (
    <FeedContainer>
      <FeedText as="h1" fontWeight="500">
        Feed
      </FeedText>
      <TransitionGroup component={null}>
        {posts.map((post) => (
          <Fade key={post.id}>
            <Post post={post} handleRemovePost={handleRemovePost} />
          </Fade>
        ))}
      </TransitionGroup>
    </FeedContainer>
  );
}
