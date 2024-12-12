import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    font: string
    black: string
    gray: string
    white900: string
    white500: string
    white100: string
    background: string
    backgroundPost: string
    green: string
  }
}

export default {
  font: "'Roboto', sans-serif",
  black: '#2b2b2b',
  gray: '#494949',
  white900: '#9f9f9f',
  white500: '#7a7a7a',
  white100: '#5f5f5f',
  background: '#343434',
  backgroundPost: '#313131',
  green: '#71bb00'
}
