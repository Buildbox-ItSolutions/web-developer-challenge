import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthorState {
  authorImage: string;
  authorName: string;
  message: string;
};

const initialState: AuthorState = {
  authorImage: '',
  authorName: '',
  message: '',
}

export const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {
    setAuthorImage: (state, action: PayloadAction<string>) => {
      state.authorImage = action.payload;
    },
    setAuthorName: (state, action: PayloadAction<string>) => {
      state.authorName = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    clearAuthorState: (state) => {
      state.authorImage = '';
      state.authorName = '';
      state.message = '';
    },
  }
});

export const { setAuthorImage, setAuthorName, setMessage, clearAuthorState } = authorSlice.actions;

export default authorSlice.reducer;
