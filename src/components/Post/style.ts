import styled from "styled-components";
import { ThemeProps } from "../../interface";

export const Wrapper = styled.div``;

export const Title = styled.h1<ThemeProps>`
  color: ${({theme}) => theme.colors.red};
`;
