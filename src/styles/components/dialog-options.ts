import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dialog: {
    "& div.MuiPaper-root": {
      backgroundColor: "#3b3b3b",
      minWidth: "320px",
      "& div.MuiDialogTitle-root": {
        padding: "1rem 2rem 0",
        "& h2": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#FFF",
          "& > span": {
            marginRight: "3rem",
          },
        },
      },
      "& div.MuiDialogContent-root": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.7rem",
        "& button": {
          height: "100px",
          width: "100%",
          textTransform: "none",
          backgroundColor: "#71bb00",
          color: "#FFF",
          margin: "0.5rem",
          padding: "0.8rem",
          "& > span": {
            display: "flex",
            flexDirection: "column",
            padding: "0.5rem 0",
            "& span:nth-child(1)": {
              marginBottom: "0.3rem",
            },
            "& span:nth-child(2)": {
              margin: "0",
            },
          },
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
