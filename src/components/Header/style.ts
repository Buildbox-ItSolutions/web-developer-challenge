import styled from "styled-components";
import { ThemeProps } from "../../interface";


export const Wrapper = styled.header<ThemeProps>`
  width: 100%;
  padding: 2.4rem 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${({theme}) => theme.colors.blackThree};
  border-bottom: 1px solid ${({theme}) => theme.colors.blackOne};
`;