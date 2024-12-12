import React from "react";
import AuthSigIn from "../../common/components/Authentication/AthSingIn/signIn";
import { SignInProps } from "./SignIn.types";

export default function SingIn({ authentication, storage }: SignInProps) {
  return <AuthSigIn authentication={authentication} storage={storage} />;
}
