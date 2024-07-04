import styled from "styled-components";

export const HeaderContainer = styled.nav`
  width: 100%;
  height: 93px;
  background: ${(props) => props.theme.colors.gray.dark};
  text-align: center;
  padding-top: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray.darker};
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 900;
  color: ${(props) => props.theme.colors.primary.main};
`;

export const Subtitle = styled.h2`
  font-size: 14px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.gray.lightest};
`;
