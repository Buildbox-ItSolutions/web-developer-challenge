import styled from "styled-components";
import { black } from "./../../../styles/colors/colors";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  background-color: ${black};
  height: 100vh;
`;
