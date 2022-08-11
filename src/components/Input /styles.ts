import styled from "styled-components";

type Props = { hasDisplay: boolean };

export const Container = styled.input<Props>`
  display: ${({ hasDisplay }) => (hasDisplay ? "block" : "none")};
  border-radius: 8px;
  background-color: #494949;
  padding: 12px 6px;
  padding-right: 0;
  width: 100%;
  height: 20px;
  border: none;
  color: lightgray;

  font-size: 16px;
  letter-spacing: normal;

  &::placeholder {
    font-size: 14px;
    color: #9f9f9f;
  }
`;
