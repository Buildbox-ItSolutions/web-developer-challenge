import { Post } from '../Interfaces/Post';
import api from './api';

export const getPosts = async () => {
  try {
    const response = await api.get<Array<Post>>('/posts');
    return response.data;
  } catch (error) {
    throw Error(error);
  }
};

export const savePost = async (post: Post) => {
  try {
    const response = await api.post<Post>('/posts', post);
    return response.data;
  } catch (error) {
    throw Error(error);
  }
};

export const deletePost = async (_id: string) => {
  try {
    await api.delete(`/posts/${_id}`);
  } catch (error) {
    throw Error(error);
  }
};
