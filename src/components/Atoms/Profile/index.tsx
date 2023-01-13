import Image from "next/image";
import React from "react";
import ProfilePicture from "../../../assets/images/avatar.png";

import * as C from "./styles";

const Profile = () => {
  return (
    <C.Container>
      <C.AvatarField>
        <Image
          src={ProfilePicture}
          alt={"Foto de perfil"}
          style={{ width: "50px", height: "50px", borderRadius: "50px" }}
        />
      </C.AvatarField>
      <text>Bem-vindo Q2 Teste!</text>
    </C.Container>
  );
};

export default Profile;
