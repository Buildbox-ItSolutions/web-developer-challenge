import styled from "styled-components";
import { Layout, Spin } from "antd";

const { Content } = Layout;

export const ContentContainer = styled(Content)`
  background-color: var(--background) !important;
  height: 100vh;
`;

export const SpinContainer = styled(Spin)`
  margin: 2.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
