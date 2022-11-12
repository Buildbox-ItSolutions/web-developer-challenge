import React from "react";
import { CardCreatePost } from "@/app/presentation/common/components/CardCreatePost";
import { makeRemoteAddPost } from "../usecases";
import { makeLocalStorageAdapter } from "../../cache/local-storage-adapter-factory";

export const MakePostsList: React.FC = () => {
  return (
    <CardCreatePost
      storage={makeLocalStorageAdapter()}
      addPost={makeRemoteAddPost()}
    />
  );
};
