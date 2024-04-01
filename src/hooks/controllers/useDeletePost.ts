import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { toast } from 'sonner';

import { QueryKeys } from '../../constants/queryKeys';
import { DeletePostRequest } from '../../contracts/postContracts';
import { postService } from '../../services/posts';

export function useDeletePost(onSuccess?: () => void) {
  const queryClient = useQueryClient();

  const { mutate: deletePostRequest, isPending } = useMutation({
    mutationFn: postService.deletePost.bind(postService),
  });

  const deletePost = useCallback(
    (data: DeletePostRequest) => {
      deletePostRequest(data, {
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
    [deletePostRequest, onSuccess, queryClient],
  );

  return { deletePost, isDeletingPost: isPending };
}
