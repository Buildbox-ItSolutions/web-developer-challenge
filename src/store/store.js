import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { authReducer } from "../slices/auth/auth.slice";
import { postsReducer } from "../slices/posts/posts.slice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
