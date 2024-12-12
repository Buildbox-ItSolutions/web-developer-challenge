import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from '../slicers/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => {
    //only default thunk, immutability and serialization middlewere are added at the moment
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
