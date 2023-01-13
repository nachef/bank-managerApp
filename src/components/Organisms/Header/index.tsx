import React from "react";
import router from "next/router";

import { useAccount } from "../../../contexts/logincontext";
import Profile from "../../Atoms/Profile";
import LogoutButton from "../../Molecules/LogoutButton";

import * as C from "./styles";

const Header = () => {
  const { pushLogout } = useAccount();
  return (
    <C.Container>
      <Profile />
      <LogoutButton
        title={"Deslogar"}
        onClick={() => {
          pushLogout();
          router.push("/LoginPage");
        }}
      />
    </C.Container>
  );
};

export default Header;
