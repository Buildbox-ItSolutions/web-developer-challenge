import { Theme } from '@bix/themes';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
