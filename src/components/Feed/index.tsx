import Post from '@/components/Post';
import { FeedContainer, FeedText } from './styled';

export default function Feed() {
  return (
    <FeedContainer>
      <FeedText as="h1" fontWeight="500">
        Feed
      </FeedText>
      {Array(1)
        .fill(0)
        .map((_, i) => (
          <Post key={i.toString()} />
        ))}
    </FeedContainer>
  );
}
