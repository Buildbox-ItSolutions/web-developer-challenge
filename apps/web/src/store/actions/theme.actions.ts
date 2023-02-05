import { Themes } from '@bix/themes';
import { createAction } from '@reduxjs/toolkit';

export const setThemeAction = createAction<Themes, string>('setTheme');
export const toggleThemeAction = createAction('toggleTheme');
