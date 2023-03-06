import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonProfile } from "../ProfileCss";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <ButtonProfile onClick={() => loginWithRedirect()}>Log In</ButtonProfile>
  );
};

export default LoginButton;
