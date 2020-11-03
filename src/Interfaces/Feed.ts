import { Post } from './Post';

export interface Feed {
  posts: Post[] | null;
}

export interface FeedContextData {
  posts: Post[] | null;
  addPost(post: Post): Promise<void>;
  removePost(_id: string): Promise<void>;
}
