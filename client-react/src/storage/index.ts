// reducers/index.ts
import { combineReducers } from "redux";
import postsReducer from "./postReducers";

const rootReducer = combineReducers({
  posts: postsReducer,
  // Adicione outros reducers aqui, se houver
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
