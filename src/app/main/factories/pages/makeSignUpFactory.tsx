import { makeLocalStorageAdapter } from "@/app/main/cache";
import SignUp from "@/app/presentation/pages/SignUp/SignUp";

import React from "react";
import { makeRemoteAddAccount } from "../usecases";

export const MakeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
      storage={makeLocalStorageAdapter()}
    />
  );
};
