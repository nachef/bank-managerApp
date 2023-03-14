import React from "react";
import Image from "next/image";

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
      <text>Bem-vindo ao Bank Register Manager!</text>
    </C.Container>
  );
};

export default Profile;
