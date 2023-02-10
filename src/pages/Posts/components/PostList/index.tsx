import { IPost } from '../../Post.types';

type Props = {
  posts: IPost[];
  deletePost: (postId: string) => void;
};

function PostList({ posts }: Props) {
  return null;
}

export default PostList;
