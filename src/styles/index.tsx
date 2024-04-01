import styled, {css} from "styled-components"
import { theme } from './theme';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const Background = styled.div`
    width: auto;
    height: auto;
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

export const ImageLogo = styled.img`
    width: 6.438rem;
    height: 2.813rem;
`;

export const Image = css`
  width: 5.5rem;
  height: 5.5rem;
`;

export const Paragraph = css`
  font-family: ${theme.fontFamily.main};
  font-size: ${theme.sizes.normal};
  font-weight: normal;  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  line-height: 1.25;
  text-align: left;
  color: ${theme.colors.grey50};
  width: auto;
  height: auto;
  margin: 0px;
`;

export const InputStyles = css`
  width: 100%;
  height: auto; 
  margin: 0px;
  padding: 0px;
  background-color: ${theme.colors.grey300};
  font-family: ${theme.fontFamily.main};
  font-size: ${theme.sizes.small};
  color: ${theme.colors.grey50};
  font-weight: normal;
  font-stretch: normal;  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  border-radius: 0.5rem;
  border: none;
  box-sizing: border-box;
  resize: none;
`;