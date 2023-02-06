import { usePosts } from '@/global/hooks/usePosts';
import { PostService } from '@/global/services';

export const useCard = () => {
  const { setIsLoading } = usePosts();

  const handleRemovePost = (id: number) => {
    PostService.deletePost(id);
    setIsLoading(true);
  };

  return {
    handleRemovePost,
  };
};
