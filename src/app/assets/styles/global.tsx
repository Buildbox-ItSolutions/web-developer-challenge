import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
          background-color: ${({ theme }) => theme.colors.primary.main};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #fff;
          border-radius: 4px;
        }
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
