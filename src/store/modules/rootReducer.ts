import { combineReducers } from "redux";
import posts from "./posts/reducer";

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;
