import { FiMinusCircle, FiXCircle } from "react-icons/fi";
import styled, { keyframes } from "styled-components";

export const Container = styled("section")(() => ({
    gap: "1.5rem",
    padding: "0.75rem",
    background: "#313131",
    border: "1px solid #494949",
    borderRadius: "0.25rem",
    display: "grid",
    gridTemplateColumns: "max-content 1fr",
    gridTemplateRows: "max-content max-content max-content",
    gridTemplateAreas: `
        "close close"
        "image content"
    `,
    transition: "0.2s",
}));

export const CloseButton = styled(FiXCircle)(() => ({
    gridArea: "close",
    justifySelf: "end",
    color: "#c25425",
    cursor: "pointer",
    fontSize: "1.5rem",
    transition: "0.1s",
    "&:hover": {
        color: "#fff",
    },
}));

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const LoadingCloseButton = styled(FiMinusCircle)(() => ({
    color: "#686868",
    fontSize: "1.5rem",
    gridArea: "close",
    justifySelf: "end",
    animation: `${rotate} 1s linear infinite`,
}));

export const Image = styled("div")<{ $src: string }>(({ $src }) => ({
    borderRadius: "2.5rem",
    width: "6rem",
    height: "6rem",
    margin: "0 1rem",
    border: "1px solid #494949",
    backgroundImage: `url(${$src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
}));

export const Content = styled("div")(() => ({
    gridArea: "content",
    display: "flex",
    flexDirection: "column",
}));

export const Message = styled("div")(() => ({
    paddingRight: "1rem",
    fontSize: "1.125rem",
    color: "#878787",
    flex: "1",
}));

export const AuthorLabel = styled("label")(() => ({
    marginTop: "2rem",
    fontSize: "0.75rem",
    color: "#5a5a5a",
}));

export const Author = styled("span")(() => ({
    color: "#686868",
}));
