import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { postsSlice } from "../slices/posts/posts.slice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
