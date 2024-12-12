import { combineReducers } from 'redux';

import posts from './posts';

const rootReducer = combineReducers({
  posts,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
