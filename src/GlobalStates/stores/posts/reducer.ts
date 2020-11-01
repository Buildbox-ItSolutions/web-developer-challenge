import { TypesPost } from "./actions";
const DEFALT_STATE = {
  posts: [],
};

export default function post(
  state: { posts: any } = DEFALT_STATE,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case TypesPost.ADD_POST:
      let allPosts = state.posts;
      allPosts = [...state.posts, action.payload];

      return (state.posts = allPosts);
    default:
      return state;
  }
}
