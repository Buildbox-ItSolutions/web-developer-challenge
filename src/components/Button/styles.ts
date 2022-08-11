import styled from "styled-components";

type Props = {
  isValid: boolean;
};

export const Container = styled.button<Props>`
  padding: 12px 24px;
  border-radius: 8px;

  background-color: ${({ isValid }) => (isValid ? "#71bb00" : "#5f5f5f")};
  color: ${({ isValid }) => (isValid ? "#fff" : "#313131")};

  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
