import { API_BASE_URL } from '@config/axios';
import { IPost } from '@/global/types/models/post';

import { IPayloadRegisterPost } from './types';

const registerNewPost = async (post: IPayloadRegisterPost) => {
  const { data } = await API_BASE_URL.post('/posts', post);

  if (data) {
    return data;
  }

  throw Error('Erro ao cadastrar uma postagem');
};

const getAllPosts = async (): Promise<IPost[]> => {
  const { data } = await API_BASE_URL.get('/posts');

  if (data) {
    return data;
  }

  throw Error('Erro ao listar as postagens');
};

const deletePost = async (id: number): Promise<void> => {
  const { data } = await API_BASE_URL.delete(
    `/posts/${JSON.stringify(id)}`
  );

  if (data) {
    return data;
  }

  throw Error('Erro ao remover a postagem');
};

export const PostService = {
  deletePost,
  getAllPosts,
  registerNewPost,
};
