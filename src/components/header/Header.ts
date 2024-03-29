import styled from "styled-components";
import BreakPoint from "../../styles/BreakPoints"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 0;
  background-color: #2b2b2b;

  @media ${BreakPoint.tablet} {
    width: 80vw;
  }

`;