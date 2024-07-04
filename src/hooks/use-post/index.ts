import { createPost, deletePost, getPosts } from '@/usecases';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { UsePostProps, UsePostReturn } from './types';

export function usePost({ onCreatePost }: UsePostProps = {}): UsePostReturn {
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery({
    initialData: [],
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  const createMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (post) => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      onCreatePost?.(post);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['posts'] }),
  });

  return {
    posts: data,
    fetchingPosts: isFetching,
    createPost: createMutation.mutate,
    creatingPost: createMutation.isPending,
    deletePost: deleteMutation.mutate,
    deletingPost: deleteMutation.isPending,
  };
}
