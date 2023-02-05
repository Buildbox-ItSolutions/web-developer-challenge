import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Themes } from '@bix/themes';

import themeReducer from './reducers/theme.reducers';

export type AppState = {
  theme: Themes;
};

const reducer = combineReducers<AppState>({
  theme: themeReducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});
