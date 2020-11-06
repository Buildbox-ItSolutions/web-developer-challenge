import styled from "styled-components";
import { Button } from "@material-ui/core";

interface ButtonProps {
  disabled: boolean;
  title: string;
}

const Container = styled(Button)<ButtonProps>`
  && {
    width: 130px;
    height: 40px;
    border-radius: 8px;
    border: none;
    outline: none;
    transition: all 0.3s;
    margin-right: ${(props) => props.title === "Descartar" && "0.5rem"};
    background-color: ${(props) =>
      props.title === "Publicar" ? "#71bb00" : "transparent"};

    & .MuiButton-label {
      color: ${(props) => (props.title === "Publicar" ? "#fff" : "#5f5f5f")};
      text-decoration: ${(props) => props.title === "Descartar" && "underline"};
      text-transform: none;
    }

    &:hover {
      background-color: ${(props) =>
        props.title === "Publicar" ? "#71bb00" : "transparent"};
    }

    &:disabled {
      background-color: ${(props) =>
        props.title === "Publicar" ? "#5f5f5f" : "transparent"};
      & .MuiButton-label {
        color: ${(props) => props.title === "Publicar" && "#313131"};
      }

      &:hover {
        background-color: ${(props) =>
          props.title === "Publicar" ? "#5f5f5f" : "transparent"};
      }
    }
  }
`;

export default Container;
