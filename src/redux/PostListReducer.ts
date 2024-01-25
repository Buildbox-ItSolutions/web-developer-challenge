import { PostInterface, PostListInterface } from '../interfaces/PostInterface';

type Action = { type: 'ADD_POST'; payload: PostInterface } | { type: 'DELETE_POST'; payload: number };

const initialState: PostListInterface = {
  posts: [],
};

const PostListReducer = (state: PostListInterface = initialState, action: Action): PostListInterface => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, { ...action.payload }],
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default PostListReducer;