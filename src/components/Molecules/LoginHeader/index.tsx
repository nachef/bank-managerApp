import Image from "next/image";
import * as C from "./styles";

import Logo from "../../../assets/images/Logo.png";

interface LoginHeaderProps {
  title: string;
  description: string;
}

export default function LoginHeader({ title, description }: LoginHeaderProps) {
  return (
    <>
      <C.Container>
        <Image src={Logo} alt={"Logo"} width={380} height={200} />
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Container>
    </>
  );
}
