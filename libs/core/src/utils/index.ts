import { Theme } from '@bix/themes';
import { readableColor } from 'polished';

export const color = (theme: Theme, color: string) =>
  readableColor(color, theme.darkColorPure, theme.lightColorPure);
