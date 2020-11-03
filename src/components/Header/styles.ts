import styled from "styled-components";

interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.div<ContainerProps>`
  height: 93px;
  width: 100%;

  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  background-color: ${(props) => props.backgroundColor};

  img {
    object-fit: contain;
    width: 103px;
    height: 45px;
  }
`;
