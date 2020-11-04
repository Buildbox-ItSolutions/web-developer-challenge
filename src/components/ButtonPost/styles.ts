import styled from "styled-components";

interface ButtonProps {
  disabled: boolean;
  title: string;
}

const ButtonPost = styled.button<ButtonProps>`
  width: 130px;
  height: 40px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${(props) =>
    props.title === "Publicar" ? "#71bb00" : "transparent"};
  color: ${(props) => (props.title === "Publicar" ? "#fff" : "#5f5f5f")};
  text-decoration: ${(props) => props.title === "Descartar" && "underline"};

  &:disabled {
    background-color: ${(props) =>
      props.title === "Publicar" ? "#5f5f5f" : "transparent"};
    color: ${(props) => props.title === "Publicar" && "#313131"};
    cursor: no-drop;
  }
`;

export default ButtonPost;
