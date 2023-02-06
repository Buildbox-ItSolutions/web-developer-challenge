import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Themes } from '@bix/themes';

import { Post } from '@/models/posts';

import themeReducer from './reducers/theme.reducers';
import postsReducers from './reducers/posts.reducers';

export type AppState = {
  theme: Themes;
  posts: Post[]
};

const reducer = combineReducers<AppState>({
  theme: themeReducer,
  posts: postsReducers,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});
