import { PostModel } from '@/models';
import { CreatePostPayload } from './types';
import { PostCRUDService } from '@/services';

export async function createPost(
  payload: CreatePostPayload
): Promise<PostModel> {
  return new Promise<PostModel>((resolve) => {
    setTimeout(async () => {
      const post = await PostCRUDService.create({
        author: payload.name,
        message: payload.message,
      });

      resolve(post);
    }, 250);
  });
}
