import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  id: string;
  authorImage: string;
  authorName: string;
  message: string;
};

interface PostState {
  posts: Post[];
};

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<string>) => {
      const postIdToDeletion = action.payload;
      state.posts = state.posts.filter((post) => post.id !== postIdToDeletion);
    },
  }
});

export const { createPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
