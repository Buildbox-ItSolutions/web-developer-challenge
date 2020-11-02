import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Colors from '../utils/Colors'

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html,
  body,
  #root {
    height: 100vh;
  }

  body {
    background: #343434;
  }

  button {
    border-style: none;
    outline: 0;
    cursor: pointer;
  }
`;
