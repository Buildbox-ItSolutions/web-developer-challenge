import styled from "styled-components";
import { Card, Col, Form, Input, Button } from "antd";

const { TextArea } = Input;

export const Column = styled(Col)`
  max-width: 1120px;
  margin: 2.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled(Card)`
  background-color: var(--background--400) !important;
  width: 32rem;
  border: solid 1px #3b3b3b;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InputStyles = styled(Input)`
  width: 100%;
  background-color: var(--backgroundInput) !important;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-family: Roboto, sans-serif;
  height: 2.5rem;
  padding-left: 1rem;

  ::placeholder {
    color: #fff;
    filter: brightness(0.5);
  }
`;

export const TextAreaStyles = styled(TextArea)`
  width: 100%;
  background-color: var(--backgroundInput) !important;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-family: Roboto, sans-serif;
  resize: none !important;
  padding-left: 1rem;

  ::placeholder {
    color: #fff;
    filter: brightness(0.5);
  }
`;

export const FormUpload = styled(Form.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnContainer = styled(Form.Item)`
  display: flex;
  align-items: right;
  justify-content: right;
`;

export const ButtonUpload = styled(Button)`
  background-color: #71bb00;
  border: 0;
  color: #fff;
`;

export const ButtonReset = styled(Button)`
  background-color: transparent;
  border: 0;
  color: #5f5f5f;

  span {
    text-decoration: underline;
  }
`;
