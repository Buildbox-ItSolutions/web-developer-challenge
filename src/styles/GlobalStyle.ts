import { createGlobalStyle } from 'styled-components'
import variables from './variables';


const GlobalStyle = createGlobalStyle`
    ${variables}

    html{
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
    }

    *,
    *:before,
    *:after{
        box-sizing: inherit;
    }


    body{
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--bg);
        color: var(--input-text);
        line-height: 1.3;
        font-family: var(--font-sans);
        font-size: var(--fz-sm);
        
        @media (max-width: 480px) {
            font-size: var(--fz-lg);
        }

    }

    
    main{
        margin: 0 auto;
        width: 100%;
        max-width: 1600px;
        min-height: 100vh;
        padding: 200px 150px;

        @media (max-width: 1080px){
        padding: 200px 100px;
        }

        @media (max-width: 768px){
        padding: 150px 50px;
        }

        @media (max-width: 480px){
        padding: 125px 25px;
        }

        &.fillHeight {
            padding: 0 150px;

            @media (max-width: 1080px) {
                padding: 0 100px;
            }
            @media (max-width: 768px) {
                padding: 0 50px;
            }
            @media (max-width: 480px) {
                padding: 0 25px;
            }
        }       
    }

    section{
        margin: 0 auto;
        padding: 50px 0;
        max-width: 1000px;

        @media (max-width: 768px) {
            padding: 80px 0;
        }

        @media (max-width: 480px) {
            padding: 30px 0;
        }
    }

    h1,h2,h3,h4,h5,h6 {
        margin: 0;
        font-weight: 400;
        color: var(--sub-text);
        line-height: 1.3;
    }

    input, textarea{
        border-radius: 0;
        outline: 0;
        font-family: var(--font-sans);
        resize: none;


        &:focus{
            outline:0;
        }

        &:focus,
        &:active{
            &::placeholder{
                opacity: 0.5;
            }
        }
    }

`

export default GlobalStyle;