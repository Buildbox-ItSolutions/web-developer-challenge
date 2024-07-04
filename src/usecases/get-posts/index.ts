import { PostModel } from '@/models';
import { PostCRUDService } from '@/services';

export async function getPosts(): Promise<PostModel[]> {
  return new Promise<PostModel[]>((resolve) =>
    setTimeout(async () => {
      const posts = await PostCRUDService.read();

      resolve(posts);
    }, 250)
  );
}
