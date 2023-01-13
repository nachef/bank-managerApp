import React, { ButtonHTMLAttributes } from "react";

import { FiLogOut } from "react-icons/fi";
import * as C from "./styles";

export type ButtonProps = {
  title: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const LogoutButton = ({ title, ...props }: ButtonProps) => (
  <C.Container {...props}>
    <FiLogOut size={20} />
  </C.Container>
);

export default LogoutButton;
