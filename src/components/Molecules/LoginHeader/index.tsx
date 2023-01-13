import Image from "next/image";
import * as C from "./styles";

import Logo from "../../../assets/images/avatar.png";

interface LoginHeaderProps {
  title: string;
  description: string;
}

const LoginHeader = ({ title, description }: LoginHeaderProps) => {
  return (
    <>
      <C.Container>
        <Image
          src={Logo}
          alt={"Logo"}
          width={30}
          height={30}
          style={{ marginBottom: 20 }}
        />
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Container>
    </>
  );
};

export default LoginHeader;
