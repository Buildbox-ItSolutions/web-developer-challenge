import styled from "styled-components";
import { black } from "../../../styles/colors/colors";

export const GridContainer = styled.div`
  @media (max-width: 1010px) {
    grid-template-columns: 1fr 5fr 1fr;
  }

  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  background-color: ${black};
  min-height: 100vh;
`;

export const GridColumn = styled.div``;
