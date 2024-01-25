import { createStore, Store, applyMiddleware } from 'redux';
import reducer from './reducer';
import { thunk } from 'redux-thunk';

const store: Store<PostState, PostAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk));

export default store;