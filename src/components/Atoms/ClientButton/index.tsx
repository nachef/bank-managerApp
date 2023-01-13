import React, { ButtonHTMLAttributes, ReactNode } from "react";

import * as C from "./styles";

export type ButtonProps = {
  title: string;
  width?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ClientButton = ({ title, width, ...props }: ButtonProps) => (
  <C.Container {...props}>{title}</C.Container>
);

export default ClientButton;
