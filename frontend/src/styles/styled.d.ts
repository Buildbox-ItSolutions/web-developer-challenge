/* eslint @typescript-eslint/no-empty-interface: "off" */

import styled from 'styled-components'

import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefauktTheme extends Theme {}
}
