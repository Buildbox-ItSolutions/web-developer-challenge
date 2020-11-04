import { PostI } from "../types/Post";

const INITIAL_STATE: PostI[] = [];

function posts(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "STORE_POST":
      return [...state, {id:Math.round(Math.random() * 1000000), ...action.payload}];

    case "INDEX_POST":
      return state;

    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);
      
    default: {
      return state;
    }
  }
}

export default posts;
