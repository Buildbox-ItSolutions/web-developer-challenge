import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

  :focus {
    outline: 0;
  }  

  body {
    background-color: #343434;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400, 1rem, 'Roboto', sans-serif;
  }

  ::-webkit-scrollbar {
  width: 4px; 
  background-color: #ffffff;
  border-radius: 5px
}

::-webkit-scrollbar-thumb {
  background-color: #9f9f9f; 
  border-radius: 5px; 
}
`