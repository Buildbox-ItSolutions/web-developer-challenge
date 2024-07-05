"use client";

import React from "react";
import PostsView from "./view";
import usePostsModel from "./model";

export default function Posts() {
  const postsModel = usePostsModel();

  return <PostsView {...postsModel} />;
}
