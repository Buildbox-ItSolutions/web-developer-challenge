import { PostsTypes, Post } from './types';

export const createPost = (data: Post) => {
  return {
    type: PostsTypes.CREATE_POST,
    payload: data,
  };
};

export const deletePost = (id: string) => {
  return {
    type: PostsTypes.DELETE_POST,
    payload: id,
  };
};

export const likePost = (id: string) => {
  return {
    type: PostsTypes.LIKE_POST,
    payload: id,
  };
};
