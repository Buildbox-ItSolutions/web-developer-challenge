import styled from "styled-components";
import { Spacing } from "../../styles/global";

export const BodyContainer = styled.div`
  margin: auto;
  max-width: 516px;
  @media all and (max-width: 48em) {
    padding: 0 ${Spacing.Medium};
  }
`;


