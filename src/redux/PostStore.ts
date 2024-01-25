import { configureStore } from '@reduxjs/toolkit';
import { PostListInterface } from '../interfaces/PostInterface';
import PostListReducer from './PostListReducer';

const PostStore = configureStore({
  reducer: PostListReducer,
  preloadedState: { posts: [] } as PostListInterface,
});

export default PostStore;