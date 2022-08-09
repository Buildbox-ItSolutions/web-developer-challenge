import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.bg.blackDarker};
  border-bottom: solid 1px ${(props) => props.theme.colors.border.black};
  height: 93px;
  display: grid;
  place-items: center;
`;
