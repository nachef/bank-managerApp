import * as C from "./styles";

interface LoginHeaderProps {
  title: string;
  description: string;
}

const LoginHeader = ({ title, description }: LoginHeaderProps) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Description>{description}</C.Description>
    </C.Container>
  );
};

export default LoginHeader;
