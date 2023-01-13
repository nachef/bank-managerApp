import React from "react";
import Profile from "../../Atoms/Profile";
import LogoutButton from "../../Molecules/LogoutButton";

import * as C from "./styles";

const Header = () => {
  return (
    <C.Container>
      <Profile />
      <LogoutButton title={"Deslogar"} />
    </C.Container>
  );
};

export default Header;
