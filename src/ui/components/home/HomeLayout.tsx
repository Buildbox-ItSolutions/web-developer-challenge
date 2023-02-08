import styled from "styled-components";
import { ColorTheme } from "../../styles/themes";

//Layout da Página.
//Page Layout.

export const HomeLayout = styled.div`
  display: grid;
  grid-template-rows: 93px 1fr;
  width: 1366px;
  min-height: 1164px;
  background-color: ${ColorTheme.HomeBackground};
`;
