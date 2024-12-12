import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 25px 0px;

  background: #2b2b2b;

  .title-logo {
    color: #71BB00;
    font-weight: 800;
  }
  .subTitle-logo {
    font-size: .8rem;
    color: gray;
    text-transform: uppercase;
  }
`