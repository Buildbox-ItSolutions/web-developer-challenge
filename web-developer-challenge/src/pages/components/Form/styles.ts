import styled from "styled-components";
import { Card, Col, Form, Input } from "antd";

export const Column = styled(Col)`
  max-width: 1120px;
  margin: 2.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled(Card)`
  background-color: var(--background--400) !important;
  width: 100%;
`;
