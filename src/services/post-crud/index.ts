import { PostModel } from '@/models';
import { CreatePayload } from './types';

const posts: PostModel[] = [];
let id = 0;

export class PostCRUDService {
  static async create(payload: CreatePayload): Promise<PostModel> {
    return new Promise<PostModel>((resolve) => {
      const newPost = { id: id++, ...payload };
      posts.push(newPost);
      resolve(newPost);
    });
  }

  static async read(): Promise<PostModel[]> {
    return new Promise<PostModel[]>((resolve) =>
      setTimeout(() => resolve(posts), 250)
    );
  }

  static async delete(id: number): Promise<void> {
    return new Promise<void>((resolve) => {
      const index = posts.findIndex((post) => post.id === id);
      posts.splice(index, 1);
      resolve();
    });
  }
}
