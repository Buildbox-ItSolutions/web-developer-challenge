import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 93px;
  background: ${props => props.theme.colors["gray-100"]};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    width: 103px;
    height: 45px;
  }
`