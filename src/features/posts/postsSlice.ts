import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidV4 } from 'uuid';

import type { AppState } from '../../app/store';

interface Post {
  id?: string;
  name: string;
  message: string;
  previewImage?: { name: string; url: string };
  image?: File;
}

export interface IInitialState {
  posts: Post[];
}

const initialState: IInitialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createPost: (state, action) => {
      const post = {
        id: uuidV4(),
        ...action.payload
      };

      state.posts.push(post);
    },
    deletePost: (state, action) => {
      const id = action.payload;

      state.posts = state.posts.filter(post => post.id === id);
    },
  },
});

export const { createPost, deletePost } = postsSlice.actions;

export const selectPosts = (state: AppState) => state.posts.posts;

export default postsSlice.reducer;
