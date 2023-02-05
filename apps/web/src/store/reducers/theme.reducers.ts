import { Themes } from '@bix/themes';
import { AnyAction, createReducer } from '@reduxjs/toolkit';
import { setLocalStorageItem } from '@/utils/funcs';
import { setThemeAction, toggleThemeAction } from '@/store/actions/theme.actions';

const INITIAL: Themes = 'light';

export default createReducer<Themes>(INITIAL, builder => {
  builder
    .addCase<string, AnyAction>(setThemeAction.type, (__, action) => {
      const theme = action.payload;

      setLocalStorageItem('theme', theme);

      return theme;
    })
    .addCase(toggleThemeAction.type, state => {
      const theme = state == 'dark' ? 'light' : 'dark';
      setLocalStorageItem('theme', theme);

      return theme;
    });
});
