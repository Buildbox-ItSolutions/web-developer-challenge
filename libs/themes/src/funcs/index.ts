import { generateMedia } from 'styled-media-query';

import { breakpoints } from '../core';
import { Theme } from '../types';

export const parseCssTheme = (theme: Theme) =>
  Object.keys(theme)
    .map(
      value =>
        `${[
          '--',
          ...value
            .split('')
            .map(el => (el.toUpperCase() == el ? '-' + el.toLocaleLowerCase() : el)),
        ].join('')}:${(theme as any)[value]};`
    )
    .join('');

export const media = generateMedia(breakpoints);
