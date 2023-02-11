import styled from "styled-components";
import { Card, Col, Form, Input, Button, Image } from "antd";
import { HiOutlinePhotograph } from "react-icons/hi";

const { TextArea } = Input;

export const Column = styled(Col)`
  max-width: 1120px;
  margin: 2.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
  }
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
    line-height: 1.29;
  }
`;

export const FormUpload = styled(Form.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UploadContainer = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const UploadInputLabel = styled.label`
  cursor: pointer !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #4b4b4b;
  border-radius: 36px;
`;

export const UploadIcon = styled(HiOutlinePhotograph)`
  color: white;
  filter: brightness(0.8);
`;

export const UploadInput = styled(Input)`
  display: none !important;
`;

export const TrashIcon = styled(Image)`
  cursor: pointer;
  margin-left: 1rem;
  width: 1.5rem !important;
  height: 1.5rem !important;
`;

export const ImageStyle = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 36px;
`;

export const BtnContainer = styled(Form.Item)`
  display: flex;
  align-items: right;
  justify-content: right;
  margin: 0;
`;

export const ButtonUpload = styled(Button)`
  background-color: #71bb00;
  border: 0;
  color: #fff;
  width: 6rem;
  height: 2.5rem;
  margin-left: 1.5rem;
  font-family: Roboto;

  :disabled {
    background-color: #5f5f5f;
    color: #313131;
  }
`;

export const ButtonReset = styled(Button)`
  background-color: transparent;
  border: 0;
  color: #5f5f5f;
  line-height: 1.29;
  font-family: Roboto;

  span {
    text-decoration: underline;
  }
`;
