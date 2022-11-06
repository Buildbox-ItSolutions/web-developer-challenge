import { createSlice } from "@reduxjs/toolkit";
const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
      return state;
    },

    removePost: {
      reducer: (state, action) => {
        state.splice(action.payload, 1);
        return state;
      },
      prepare: (postIndex) => {
        return {
          payload: postIndex,
        };
      },
    },
  },
});

export const postsReducer = postsSlice.reducer;

export const { addPost, removePost } = postsSlice.actions;

export const postsSelector = (state) => state.posts;
