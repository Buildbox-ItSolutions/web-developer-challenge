import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      blackDark: string
      black: string
      blackLight: string
      borderColor: string
      grayDark1: string
      grayDark2: string
      gray: string
      grayLight: string
      bgButton: string
    }
  }
}
