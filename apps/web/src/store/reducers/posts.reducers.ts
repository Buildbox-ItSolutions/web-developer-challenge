import { Post } from '@/models/posts';
import { AnyAction, createReducer } from '@reduxjs/toolkit';

import { addPostAction, removePostAction } from '../actions/posts.actions';

const INITIAL: Post[] = [];

export default createReducer<Post[]>(INITIAL, builder => {
  builder
    .addCase<string, AnyAction>(removePostAction.type, (state, action) =>
      state.filter(({ id }) => action.payload != id)
    )
    .addCase<string, AnyAction>(addPostAction.type, (state, action) => [
      action.payload,
      ...state,
    ]);
});
