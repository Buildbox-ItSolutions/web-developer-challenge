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
        name={postData[1].nome}
        text={postData[1].texto}
        profileImage={postData[1].profileImage}
        uploadedImage={postData[1].uploadedImage}
      />
      <FeedboxItem
        name={postData[2].nome}
        text={postData[2].texto}
        profileImage={postData[2].profileImage}
        uploadedImage={postData[2].uploadedImage}
      />
      <FeedboxItem
        name={postData[3].nome}
        text={postData[3].texto}
        profileImage={postData[3].profileImage}
        uploadedImage={postData[3].uploadedImage}
      />
    </Box>
  );
};

export default Feedbox;
