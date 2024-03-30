import styled from "styled-components"
import theme from './styles/theme';
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const Background = styled.div`
    width: auto;
    height: 100vh;
    padding-bottom: 170px;
    background-color: ${theme.colors.grey600};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
    width: auto;
    height: 93px;
    background-color: ${theme.colors.grey800};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    width: 103px;
    height: 45px;
    object-fit: contain;
`;