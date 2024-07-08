import styled from "styled-components";
import { Col, Layout, Image } from "antd";
const { Header } = Layout;

export const Container = styled(Header)`
  background-color: var(--background-500) !important;
  height: 6.25rem !important;
`;

export const Column = styled(Col)`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled(Image)`
  padding: 1.5rem 0;
`;
