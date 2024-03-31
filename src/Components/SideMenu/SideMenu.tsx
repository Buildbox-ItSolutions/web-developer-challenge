import React from "react";
import { Box } from "@mui/material";

const SideMenu = () => {
  return (
    <Box
      sx={{
        background: "#FFFFF7",
        padding: "2%",
        borderRadius: "32px",
        boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.5)",
        height: "100%",
        width: "20%",
        minWidth: "20%",
      }}
    >
      <Box sx={{ background: "lightGreen" }}>test</Box>
    </Box>
  );
};

export default SideMenu;
