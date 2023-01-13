import React, { ButtonHTMLAttributes } from "react";

import { AiOutlineClose } from "react-icons/ai";
import * as C from "./styles";

export type ButtonProps = {
  title: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CloseButton = ({ title, ...props }: ButtonProps) => (
  <C.Container {...props}>
    <AiOutlineClose size={15} />
  </C.Container>
);

export default CloseButton;
