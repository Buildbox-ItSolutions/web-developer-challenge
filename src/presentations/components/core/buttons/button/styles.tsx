import styled from "styled-components";

export type ButtonProps = { backgroundColor?: string; color?: string };

export const Button = styled.button<ButtonProps>`
  width: 98px;
  height: 41px;
  padding: 12px 24px;
  object-fit: contain;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor ?? "#5f5f5f"};
  color: ${(props) => props.color ?? "#5f5f5f"};
  border: none;
  cursor: pointer;
`;
