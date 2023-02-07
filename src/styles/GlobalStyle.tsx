import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

 :root {
   --black: #343434;
   --black-two: #313131;
   --black-three: #494949;
   --black-four: #5f5f5f;
   --button-enable: #71bb00;
 }

  * {
    margin: 0;
    padding: 0;
    color: #9f9f9f;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #343434;
  }
`
export default GlobalStyle
