import styled from 'styled-components';
import Post from '@/components/Post';
import Text from '@/components/Text';

const FeedContainer = styled.div`
  width: 100%;
  max-width: 516px;
  margin-top: 56px;
`;

const FeedText = styled(Text)`
  margin-bottom: 8px;
`;

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
