import { Post } from '@/models/posts';
import { createAction } from '@reduxjs/toolkit';

export const removePostAction = createAction<number>('removePost');
export const addPostAction = createAction<Post>('addPost');
