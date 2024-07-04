import { PostCRUDService } from '@/services';

export async function deletePost(id: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(async () => {
      await PostCRUDService.delete(id);
      resolve();
    }, 250);
  });
}
