import Post from '@/components/Post';
import type { Post as PostType } from '@/types';
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
      {posts.map((post) => (
        <Post
          post={post}
          handleRemovePost={handleRemovePost}
          key={post.id}
        />
      ))}
    </FeedContainer>
  );
}
