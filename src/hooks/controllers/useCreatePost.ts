import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { toast } from 'sonner';

import { QueryKeys } from '../../constants/queryKeys';
import { CreatePostRequest } from '../../contracts/postContracts';
import { postService } from '../../services/posts';

export function useCreatePost(onSuccess?: () => void) {
  const queryClient = useQueryClient();

  const { mutate: createPostRequest, isPending } = useMutation({
    mutationFn: postService.createPost.bind(postService),
  });

  const createPost = useCallback(
    (data: CreatePostRequest) => {
      createPostRequest(data, {
        async onSuccess() {
          onSuccess?.();

          await queryClient.invalidateQueries({
            predicate(query) {
              return query.queryKey[0] === QueryKeys.posts()[0];
            },
          });
        },
        onError(error) {
          toast.error(error.message);
        },
      });
    },
    [createPostRequest, onSuccess, queryClient],
  );

  return { createPost, isCreatingPost: isPending };
}
