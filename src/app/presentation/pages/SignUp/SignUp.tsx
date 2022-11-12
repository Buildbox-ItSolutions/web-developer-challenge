import React from "react";
import AuthSignUp from "../../common/components/Authentication/AthSignUp/signup";
import { SignUpProps } from "./SignUp.types";

export default function SignUp({ storage, addAccount }: SignUpProps) {
  return <AuthSignUp addAccount={addAccount} storage={storage} />;
}
