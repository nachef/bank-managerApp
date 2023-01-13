import React, { ButtonHTMLAttributes } from "react";

import * as C from "./styles";

export type ButtonProps = {
  title: string;
  width?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, width, ...props }: ButtonProps) => (
  <C.Container {...props} width={width}>
    {title}
  </C.Container>
);

export default Button;
