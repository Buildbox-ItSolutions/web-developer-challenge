import styled from "styled-components";

export const CustomButton = styled.button`
  width: 98px;
  height: 41px;
  padding: 12px 24px;
  object-fit: contain;
  border-radius: 8px;
  background-color: #5f5f5f;
  border: none;
  cursor: pointer;
`;

export const PrimaryButton = styled(CustomButton)`
  background-color: #71bb00;
  color: #fff;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const DisabledButton = styled(CustomButton)`
  background-color: transparent;
  color: #5f5f5f;
  padding-left: 0;
  padding-right: 0;
  width: auto;
`;
