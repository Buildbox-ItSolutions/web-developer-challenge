import { TypesPost } from "./actions";
import { produce } from "immer";
import tron from "../../../Config/reactotron";

export type PostsTypes = {
  image: string;
  name: string;
  message: string;
};
const DEFAULT_STATE: { posts: PostsTypes[] } = {
  posts: [],
};

export default function feed(
  state: { posts: PostsTypes[] } = DEFAULT_STATE,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case TypesPost.ADD_POST:
      return produce(state, (draft) => {
        draft.posts.push(action.payload);
      });
    case TypesPost.DELETE_POST:
      return produce(state, (draft) => {
        draft.posts.splice(action.payload.index, 1);
      });
    default:
      return state;
  }
}
