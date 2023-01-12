import React, { ButtonHTMLAttributes, ReactNode } from "react";

import * as C from "./styles";

export type ButtonProps = {
  title: string;
  width?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, width, ...props }: ButtonProps) => (
  <C.Container {...props} width={width}>
    <text>Entrar</text>
  </C.Container>
);

export default Button;
