import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
  }

  body * {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    line-height: 18px;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
`;
