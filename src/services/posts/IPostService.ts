import type { Post } from '../../@types/Post';
import type {
  CreatePostRequest,
  DeletePostRequest,
  GetPostsQuery,
} from '../../contracts/postContracts';

export interface IPostService {
  getPosts(query: GetPostsQuery): Promise<Post[]>;

  createPost(dto: CreatePostRequest): Promise<Post>;

  deletePost(dto: DeletePostRequest): Promise<void>;
}
