import posts from '@/reducers/posts';

import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({ posts });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
