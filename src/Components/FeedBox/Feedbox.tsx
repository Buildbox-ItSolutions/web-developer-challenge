import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import FeedboxItem from "./FeedboxItem.tsx";
import { getMainContainerStyle } from "./Feedbox.styles.tsx";

const Feedbox = ({ postList }) => {
  return (
    <Box sx={getMainContainerStyle()}>
      {postList.map((item) => (
        <FeedboxItem
          key={item.id}
          name={item.nome}
          text={item.texto}
          profileImage={item.profileImage}
          uploadedImage={item.uploadedImage}
        />
      ))}
    </Box>
  );
};

export default Feedbox;
