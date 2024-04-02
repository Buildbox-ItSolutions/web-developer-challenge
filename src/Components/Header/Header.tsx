import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { FaHome, FaHeart, FaBookmark, FaCloudMoon } from "react-icons/fa";
import { SvgLogo } from "../../assets/utils/SvgComponent/SvgLogo.tsx";
import {
  getContainerStyle,
  getLogoStyle,
  getMenuStyle,
} from "./Header.styles.tsx";

const Header = () => {
  return (
    <Box sx={getContainerStyle} id="header">
      <Box sx={getLogoStyle}>
        <Box>
          <SvgLogo />
        </Box>
        <Typography>LivePost</Typography>
      </Box>
      <Box sx={getMenuStyle}>
        <IconButton>
          <FaHome />
        </IconButton>
        <IconButton>
          <FaBookmark />
        </IconButton>
        <IconButton>
          <FaHeart />
        </IconButton>
        <IconButton>
          <FaCloudMoon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
