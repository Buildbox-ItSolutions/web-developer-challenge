import React from "react";
import ShareBox from "../../Components/ShareBox/ShareBox.tsx";
import Feedbox from "../../Components/FeedBox/Feedbox.tsx";
import SideMenu from "../../Components/SideMenu/SideMenu.tsx";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        padding: "1%",
        height: "100vh",
        display: "flex",
      }}
    >
      <SideMenu />
      <Box
        sx={{
          display: "block",
          height: "100%",
          width: "100%",
          margin: "0% 15% 0% 15%",
        }}
      >
        <ShareBox />
        <Feedbox />
      </Box>
    </Box>
  );
};

export default Home;
