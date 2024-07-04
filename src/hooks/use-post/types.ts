import { PostModel } from '@/models';
import { CreatePostPayload } from '@/usecases/create-post/types';

export interface UsePostProps {
  onCreatePost?(post: PostModel): void;
}

export interface UsePostReturn {
  posts: PostModel[];
  fetchingPosts: boolean;
  createPost(payload: CreatePostPayload): void;
  creatingPost: boolean;
  deletePost(id: number): void;
  deletingPost: boolean;
}
