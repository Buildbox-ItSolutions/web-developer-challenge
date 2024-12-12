import { makeLocalStorageAdapter } from "@/app/main/cache";
import { SingIn } from "@/app/presentation/pages";
import React from "react";
import { makeRemoteAuthentication } from "../usecases";

export const MakeSignIn: React.FC = () => {
  return (
    <SingIn
      authentication={makeRemoteAuthentication()}
      storage={makeLocalStorageAdapter()}
    />
  );
};
