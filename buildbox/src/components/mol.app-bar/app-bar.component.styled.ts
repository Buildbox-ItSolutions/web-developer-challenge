import styled from "styled-components";
import { Spacing } from "../../styles/global";

export const AppBarContainer = styled.header`
  background-color: ${(props) => props.theme.colors.gray[900]};
  display: flex;
  justify-content: center;
  padding: ${Spacing.Large} 0;
`;

export const Logo = styled.img`
    height:45px; 
    width=103px; 
`;
