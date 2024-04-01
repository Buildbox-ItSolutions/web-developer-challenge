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

const STORAGE_KEY = 'bx:posts';
const USE_SIMULATION_DELAY = true;

async function processDelay() {
  if (USE_SIMULATION_DELAY) {
    await wait();
  }
}

export class LocalStoragePostService implements IPostService {
  async getPosts(query: GetPostsQuery): Promise<Post[]> {
    const { limit, page } = getPostsQuery.parse(query);

    await processDelay();

    const posts: Post[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

    return posts.reverse().slice((page - 1) * limit, page * limit);
  }

  async createPost(dto: CreatePostRequest): Promise<Post> {
    const { name, message, imageURL } = createPostRequest.parse(dto);

    await processDelay();

    const posts = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

    const post: Post = {
      id: randomString(),
      name,
      message,
      imageURL,
    };

    posts.push(post);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));

    return post;
  }

  async deletePost(dto: DeletePostRequest): Promise<void> {
    const { id } = deletePostRequest.parse(dto);

    await processDelay();

    let posts = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

    posts = posts.filter((post: Post) => post.id !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }
}
