import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    addPost: {
      reducer: (state, action) => {
        const post = action.payload;
        if (!post.id) {
          post.id = state.length + 1;
        }
        state.push(post);
        return state;
      },
      prepare: (post) => {
        return { payload: Object.assign({}, post) };
      },
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
