import styled from "styled-components";

export type ButtonProps = {
  backgroundColor?: string;
  color?: string;
  padding?: string;
  width?: string;
  // height?: string;
  // borderRadius?: string;
  // border?: string;
  // cursor?: string;
  // onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // disabled?: boolean;
};

export const Button = styled.button<ButtonProps>`
  min-width: ${(props) => props.width ?? "98px"};
  height: 41px;
  padding: ${(props) => props.padding ?? "12px 24px"};
  object-fit: contain;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor ?? "#5f5f5f"};
  color: ${(props) => props.color ?? "#5f5f5f"};
  border: none;
  cursor: pointer;
`;
