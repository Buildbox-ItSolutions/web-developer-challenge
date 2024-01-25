import { PostInterface } from '../interfaces/PostInterface';

export const addPost = (post: PostInterface) => ({
    type: 'ADD_POST',
    payload: post,
});

export const deletePost = (postId: number) => ({
    type: 'DELETE_POST',
    payload: postId,
});
