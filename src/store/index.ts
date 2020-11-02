import { createStore, Store } from 'redux';
import { PostsState } from './ducks/posts/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  posts: PostsState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
