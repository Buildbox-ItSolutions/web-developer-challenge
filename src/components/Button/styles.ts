import styled from "styled-components";

interface ContainerProps {
  backgroundColor: string;
  hoverColor: string;
}

export const Container = styled.button<ContainerProps>`
  width: 140px;
  height: 45px;
  border-style: none;
  border-width: 0px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  transition: all 0.5s;
  cursor: pointer;
  outline: none;

  background-color: ${(props) => props.backgroundColor};

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
