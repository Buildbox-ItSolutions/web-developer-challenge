import { PostParams } from '../Form';

export interface FeedProps {
  posts: PostParams[];
  deletePost: (uuid: string) => void;
}
