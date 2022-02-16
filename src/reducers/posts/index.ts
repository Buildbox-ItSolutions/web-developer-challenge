import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Post = {
  id: string;
  avatar: string | undefined;
  name: string;
  message: string;
};

const initialState: Post[] = [];

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      return [action.payload, ...state];
    },
    removePost(state, action: PayloadAction<string>) {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, removePost } = postSlice.actions;

export default postSlice.reducer;
