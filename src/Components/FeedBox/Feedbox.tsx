import React from "react";
import { Box } from "@mui/material";
import FeedboxItem from "./FeedboxItem.tsx";
import { getMainContainerStyle } from "./Feedbox.styles.tsx";

const Feedbox = ({ postList, handleRemoveItem }) => {
  const sortedPostList = postList.sort((a, b) => b.id - a.id);

  return (
    <Box sx={getMainContainerStyle()}>
      {sortedPostList.map((item) => (
        <FeedboxItem
          key={item.id}
          id={item.id}
          name={item.nome}
          text={item.texto}
          profileImage={item.profileImage}
          uploadedImage={item.uploadedImage}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </Box>
  );
};

export default Feedbox;
