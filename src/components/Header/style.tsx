import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  /* align-items: center; */
  justify-content: center;

  width: 100%;
  padding: 1.5rem 0;

  background-color: ${props => props.theme["bg-header"]};

  img {
    width: 6.5rem;
  }
`