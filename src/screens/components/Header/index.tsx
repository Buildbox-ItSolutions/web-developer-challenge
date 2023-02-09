import React from "react";
import { Grid } from "@mui/material";

//@ts-ignore
import IconLogo from "../../../assets/bx-logo.png";

export const Header = () => {
  return (
    <Grid
      container
      item
      xs={12}
      alignItems="center"
      justifyContent="center"
      bgcolor="#2b2b2b"
      p={3}
    >
      <img src={IconLogo} alt="Logo" />
    </Grid>
  );
};
