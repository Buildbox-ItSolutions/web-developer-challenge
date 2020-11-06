import { makeStyles } from "@material-ui/core/styles";
import "cropperjs/dist/cropper.css";

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
        "& div.cropper-container": {
          borderRadius: "8px",
        },
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
    "@media (max-width: 425px)": {
      "& div.MuiPaper-root": {
        width: "100%",
        height: "100%",
        minHeight: "100%",
        margin: "0",
      },
    },
  },
});

export { useStyles };
