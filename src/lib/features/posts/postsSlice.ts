import { RootState } from "@lib/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { readStorage, setStorage } from "@storage/posts";

export interface Post {
  name: string;
  photo: string;
  message: string;
}

interface PostState {
  value: Post[];
}

const initialState: PostState = {
  value: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    init: (state) => {
      state.value = readStorage();
    },
    post: (state, action: PayloadAction<Post>) => {
      state.value.unshift(action.payload);
      setStorage(state.value);
    },
    remove: (state, action: PayloadAction<{ index: number }>) => {
      state.value.splice(action.payload.index, 1);
      setStorage(state.value);
    },
  },
});

export const { init, post, remove } = postsSlice.actions;

export const selectedPosts = (state: RootState) => state.posts.value;

export default postsSlice.reducer;
