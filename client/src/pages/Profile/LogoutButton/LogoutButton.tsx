import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonProfile } from "../ProfileCss";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const handleCapture = () => {
    console.log("holaaaa");
    localStorage.clear();
  };

  return (
    <ButtonProfile
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      onClickCapture={handleCapture}
    >
      Log Out
    </ButtonProfile>
  );
};

export default LogoutButton;
