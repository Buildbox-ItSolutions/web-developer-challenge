import React from "react";
import { Box } from "@mui/material";
import FeedboxItem from "./FeedboxItem.tsx";
import { getMainContainerStyle } from "./Feedbox.styles.tsx";
import { postData } from "../../assets/utils/postData.ts";

const Feedbox = () => {
  return (
    <Box sx={getMainContainerStyle}>
      <FeedboxItem
        name={postData[0].nome}
        text={postData[0].texto}
        profileImage={postData[0].profileImage}
        uploadedImage={postData[0].uploadedImage}
      />
      <FeedboxItem
        name={postData[0].nome}
        text={postData[0].texto}
        profileImage={postData[0].profileImage}
      />
      <FeedboxItem
        name={postData[2].nome}
        text={postData[2].texto}
        profileImage={postData[2].profileImage}
        uploadedImage={postData[2].uploadedImage}
      />
      <FeedboxItem
        name={postData[0].nome}
        text={postData[0].texto}
        profileImage={postData[0].profileImage}
      />
      <FeedboxItem
        name={postData[0].nome}
        text={postData[0].texto}
        profileImage={postData[0].profileImage}
      />
    </Box>
  );
};

export default Feedbox;
