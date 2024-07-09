import 'styled-components'

import theme from '../styles/theme'

export type ITheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}