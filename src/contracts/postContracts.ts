import { z } from 'zod';

import { Post } from '../@types/Post';

// ## --------------------------------
export const getPostsQuery = z.object({
  limit: z.number().default(6),
  page: z.number().default(1),
});

export type GetPostsQuery = z.infer<typeof getPostsQuery>;

// ## --------------------------------
export type GetPostsResponse = {
  posts: Post[];
  totalPages: number;
};

// ## --------------------------------
export const createPostRequest = z.object({
  name: z.string().min(1, 'O nome é obrigatório.'),
  message: z.string().min(1, 'A mensagem é obrigatória.'),
  imageURL: z.string().url('A imagem precisa ser uma URL.'),
});

export type CreatePostRequest = z.infer<typeof createPostRequest>;

// ## --------------------------------
export const deletePostRequest = z.object({
  id: z.string().min(1, 'O ID é obrigatório.'),
});

export type DeletePostRequest = z.infer<typeof deletePostRequest>;
