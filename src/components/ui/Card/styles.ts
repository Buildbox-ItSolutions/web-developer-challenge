import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bg.blackDark};
  border-radius: 3px;
  border: solid 1px ${(props) => props.theme.colors.border.gray};
  box-sizing: border-box;
  padding: 24px;
  width: 100%;
`;
