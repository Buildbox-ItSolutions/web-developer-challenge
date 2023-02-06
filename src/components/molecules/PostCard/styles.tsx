import styled from "styled-components";

export interface CardStyleProps {
  padding: number;
  marginTop: number;
  marginBottom: number;
}

export const Card = styled.div<CardStyleProps>`
  width: 100%;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  box-sizing: border-box;
  padding: ${({ padding }) => padding}px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;

  display: flex;
  flex-direction: column;
`;
