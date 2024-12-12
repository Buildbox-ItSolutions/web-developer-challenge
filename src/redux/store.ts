import { configureStore } from "@reduxjs/toolkit";
import slicePosts from "./slicePosts";

const store = configureStore({
  reducer: {
    posts: slicePosts,
  },
});

export default store;
