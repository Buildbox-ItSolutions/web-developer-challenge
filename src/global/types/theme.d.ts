import 'styled-components';
import { THEME_DEFAULT_TEMPLATE } from '@styles/index';

type ThemeType = typeof THEME_DEFAULT_TEMPLATE;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
