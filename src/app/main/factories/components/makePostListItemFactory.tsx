import React from "react";
import { makeRemoteLoadPosts } from "@/app/main/factories/usecases";
import Feed from "@/app/presentation/common/components/Feed/Feed";

export const MakePostsListItem: React.FC = () => {
  return <Feed loadPost={makeRemoteLoadPosts()} />;
};
