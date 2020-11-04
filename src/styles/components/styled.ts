import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const BoxBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonsPost = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin: 1rem 0;
`;

const useStyles = makeStyles({
  dialog: {
    "& div.MuiPaper-root": {
      backgroundColor: "#3b3b3b",
      width: "100%",
      minWidth: "320px",
      maxWidth: "768px",
      "& div.MuiDialogTitle-root": {
        padding: "1rem 1.5rem 0.5rem",
        "& h2": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#FFF",
          "& svg": {
            marginLeft: "2rem",
            cursor: "pointer",
          },
        },
      },
      "& div.MuiDialogContent-root div": {
        maxHeight: "300px",
        width: "100%",
        overflow: "hidden",
        borderRadius: "8px",
      },
      "& div.MuiDialogActions-root": {
        width: "100%",
        padding: "0.5rem 1.5rem 1rem",
        "& button": {
          width: "130px",
          height: "40px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#71bb00",
          color: "#FFF",
        },
      },
    },
  },
});

export { BoxBody, ButtonsPost, useStyles };
