import { Post } from '../../../@types/Post';
import {
  createPostRequest,
  CreatePostRequest,
  deletePostRequest,
  DeletePostRequest,
  getPostsQuery,
  GetPostsQuery,
} from '../../../contracts/postContracts';
import { randomString } from '../../../utils/randomString';
import { wait } from '../../../utils/wait';
import { IPostService } from '../IPostService';

const USE_SIMULATION_DELAY = true;

async function processDelay() {
  if (USE_SIMULATION_DELAY) {
    await wait();
  }
}

export class InMemoryPostService implements IPostService {
  private posts: Post[] = [];

  async getPosts(query: GetPostsQuery): Promise<Post[]> {
    const { limit, page } = getPostsQuery.parse(query);

    await processDelay();

    return this.posts.reverse().slice((page - 1) * limit, page * limit);
  }

  async createPost(dto: CreatePostRequest): Promise<Post> {
    const { name, message, imageURL } = createPostRequest.parse(dto);

    await processDelay();

    const post: Post = {
      id: randomString(),
      name,
      message,
      imageURL,
    };

    this.posts.push(post);

    return post;
  }

  async deletePost(dto: DeletePostRequest): Promise<void> {
    const { id } = deletePostRequest.parse(dto);

    await processDelay();

    this.posts = this.posts.filter((post: Post) => post.id !== id);
  }
}
