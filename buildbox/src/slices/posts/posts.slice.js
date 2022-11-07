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
        const postId = action.payload;
        const indexTorRemove = state.findIndex((post) => post.id === postId);
        state.splice(indexTorRemove, 1);
        return state;
      },
      prepare: (postId) => {
        return {
          payload: postId,
        };
      },
    },
  },
});

export const postsReducer = postsSlice.reducer;

export const { addPost, removePost } = postsSlice.actions;

export const postsSelector = (state) => state.posts;
