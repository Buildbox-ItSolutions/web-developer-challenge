import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { posts: postsReducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
