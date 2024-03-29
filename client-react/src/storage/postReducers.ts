// reducers/postsReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { PostInterface } from "../api/postInterface";

interface PostsState {
  posts: PostInterface[];
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostInterface[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;

export default postsSlice.reducer;
