import React, { useState, useEffect } from "react";
import ShareBox from "../../Components/ShareBox/ShareBox.tsx";
import Feedbox from "../../Components/FeedBox/Feedbox.tsx";
import SideMenu from "../../Components/SideMenu/SideMenu.tsx";
import { Box } from "@mui/material";
import { postData } from "../../assets/utils/postData.ts";
import { getContainerStyle } from "./Home.styles.ts";

const Home = () => {
  const [postList, setPostList] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    const parsedPosts = savedPosts ? JSON.parse(savedPosts) : [];

    if (parsedPosts.length === 0) {
      const mergedPosts = [...parsedPosts, ...postData];
      return mergedPosts;
    } else {
      return parsedPosts;
    }
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(postList));
  }, [postList]);

  // const handleRemoveItem = () => {
  //   const updatedItems = [...postList];
  //   updatedItems.pop();
  //   setPostList(updatedItems);
  // };

  const handleRemoveItem = (idToRemove) => {
    const updatedItems = postList.filter((item) => item.id !== idToRemove);
    setPostList(updatedItems);
  };

  // console.log(postList);

  return (
    <Box sx={getContainerStyle()}>
      <SideMenu />
      <Box>
        <ShareBox setPostList={setPostList} />
        <Feedbox postList={postList} handleRemoveItem={handleRemoveItem} />
      </Box>
    </Box>
  );
};

export default Home;
