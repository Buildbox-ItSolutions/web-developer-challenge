import { FiTrash } from "react-icons/fi";

import styled from "styled-components";

export const TrashIcon = styled(FiTrash)``;

export const Container = styled("main")(() => ({
    padding: "1.25rem",
    background: "#313131",
    border: "1px solid #494949",
    borderRadius: "0.25rem",
}));

export const ImageField = styled("span")(() => ({
    border: `1px solid #ccc`,
    borderRadius: "2.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "6rem",
    height: "6rem",
    overflow: "hidden",
    cursor: "pointer",
    backgroundColor: "transparent",
    svg: {
        color: "#ccc",
    },
    img: {
        objectFit: "fill",
        width: "6rem",
        height: "6rem",
        border: `1px solid #ccc`,
    },
    marginBottom: "0.8rem",
}));

export const ImageArea = styled("div")(() => ({
    position: "relative",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "2.5rem",

    "& > svg": {
        color: "#c6c6c6",
        cursor: "pointer",
    },
}));

export const FormWrapper = styled("form")(() => ({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    alignItems: "center",
    gap: "0.8rem",
}));

export const TrashButton = styled("button")(() => ({
    position: "absolute",
    left: "55%",
    top: "45%",
    transform: "translate(3rem, -50%)",
    cursor: "pointer",
    transition: "0.1s",
    background: "none",
    border: "none",
    padding: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.25rem",
    height: "2.25rem",
    fontSize: "1.5rem",
    color: "#c25425",
    "&:hover": {
        color: "#fff",
    },
}));

export const Input = styled("input")(() => ({
    padding: "0.75rem 1rem",
    background: "#494949",
    width: "100%",
    color: "#fff",
    border: "none",
    fontSize: "0.875rem",
    borderRadius: "0.5rem",
}));

export const Textarea = styled("textarea")(() => ({
    padding: "0.75rem 1rem",
    width: "100%",
    background: "#494949",
    color: "#fff",
    border: "none",
    borderRadius: "0.5rem",
    resize: "none",
    minHeight: "8rem",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "0.875rem",
}));

export const Buttons = styled("div")(() => ({
    marginTop: "1rem",
    display: "flex",
    width: "100%",
    justifyContent: "end",
    gap: "0.5rem",
}));

export const CancelButton = styled("button")(() => ({
    padding: "0.75rem 1.25rem",
    color: "#7a7a7a",
    background: "none",
    border: "none",
    textDecoration: "underline",
    transition: "0.1s",
    cursor: "pointer",
    borderRadius: "0.5rem",
    "&:hover": {
        color: "#fff",
    },
}));

export const SubmitButton = styled("button")(() => ({
    padding: "0.75rem 1.25rem",
    background: "#71bb01",
    color: "#fff",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    transition: "0.1s",
    "&:hover": {
        background: "#5f9e00",
    },
    "&:disabled": {
        background: "#385D00",
        color: "#ccc",
        cursor: "default",
    },
}));
