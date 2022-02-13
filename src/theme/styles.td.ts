import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      //White
      white: string
      //Black
      blackDark: string
      black: string
      blackLight: string

      //Border colors
      borderColor: string

      //Gray
      grayDark1: string
      grayDark2: string
      gray: string
      grayLight: string

      //Auxiliary Colors
      green: string
      red: string
    }
  }
}
