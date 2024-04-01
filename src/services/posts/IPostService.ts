import type { Post } from '../../@types/Post';
import type {
  CreatePostRequest,
  DeletePostRequest,
  GetPostsQuery,
  GetPostsResponse,
} from '../../contracts/postContracts';

export interface IPostService {
  getPosts(query: GetPostsQuery): Promise<GetPostsResponse>;

  createPost(dto: CreatePostRequest): Promise<Post>;

  deletePost(dto: DeletePostRequest): Promise<void>;
}
