import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 1.5rem 0;

  border-bottom: 1px solid ${props => props.theme["border-header"]};

  background-color: ${props => props.theme["bg-header"]};

  img {
    width: 6.5rem;
  }
`