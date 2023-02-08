import styled from "styled-components";
import { ColorTheme } from "../../styles/themes";

//Layout do corpo da Página.
//Page body layout.

export const HomeBody = styled.div`
  display: grid;
  grid-template-rows: 393px 73px 1fr;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  background-color: ${ColorTheme.HomeBackground};
`;
