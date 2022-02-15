import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body, input, textarea{
        font-family: 'Roboto', sans-serif;
        color: #9f9f9f;
        background-color: #343434;
    }
`
