import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { FaHome, FaUser, FaHeart } from "react-icons/fa";
import { TbNewSection } from "react-icons/tb";
import { SvgLogo } from "../../assets/utils/SvgComponent/SvgLogo.tsx";
import {
  getContainerStyle,
  getLogoStyle,
  getMenuStyle,
} from "./Header.styles.tsx";

const Header = () => {
  return (
    <Box sx={getContainerStyle}>
      <Box sx={getLogoStyle}>
        <Box>
          <SvgLogo />
        </Box>
        <Typography>LivePost</Typography>
      </Box>
      <Box sx={getMenuStyle}>
        <IconButton>
          <TbNewSection />
        </IconButton>
        <IconButton>
          <FaHome />
        </IconButton>
        <IconButton>
          <FaHeart />
        </IconButton>
        <IconButton>
          <FaUser />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
