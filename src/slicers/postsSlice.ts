import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";


export interface PostState {
  comment: string;
  photo: string;
  name: string;
  tags: Array<string>;
  time: Date;
}

const initialState: PostState = {
  comment: '',
  photo: '',
  name: '',
  tags: [],
  time: new Date(),
};


export const postsSlice = createSlice({
  name: "posts",
  initialState: [] as PostState[],
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    insertPost: (state, action: PayloadAction<PostState>) => {
        state.push(action.payload);
    },
    removePost: (state, action: PayloadAction<number>) => {
        state.splice(action.payload, 1);
    }
  }
});

export const { insertPost, removePost } = postsSlice.actions;

export const selectPost = (state: RootState): PostState[] => state.posts;




export default postsSlice.reducer;
