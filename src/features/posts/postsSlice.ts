import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidV4 } from 'uuid';

import type { AppState } from '../../app/store';
import { IPost } from '../../models/IPost';

import postSeed from "./postSeed.json"

export interface IInitialState {
  posts: IPost[];
}

const initialState: IInitialState = {
  posts: [postSeed],
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

      console.log(post);
      

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
