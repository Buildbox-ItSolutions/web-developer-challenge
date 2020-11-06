import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dialog: {
    "& div.MuiPaper-root": {
      backgroundColor: "#3b3b3b",
      minWidth: "320px",
      "& div.MuiDialogTitle-root": {
        padding: "1rem 1rem 0",
        "& h2": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#FFF",
          "& > span": {
            marginRight: "3rem",
          },
          "& svg": {
            cursor: "pointer",
          },
        },
      },
      "& div.MuiDialogContent-root": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        "& button": {
          width: "100%",
          textTransform: "none",
          backgroundColor: "#71bb00",
          color: "#FFF",
          padding: "0.8rem",
          borderRadius: "8px",
        },
        "& button:nth-child(1)": {
          marginRight: "0.5rem",
        },
        "& button:nth-child(2)": {
          marginLeft: "0.5rem",
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

export default useStyles;
