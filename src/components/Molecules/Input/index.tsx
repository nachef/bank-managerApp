import React, { InputHTMLAttributes, ReactNode, useState } from "react";

import {
  Container,
  CustomInput,
  IconLeft,
  IconRight,
  InputWrapper,
  Label,
  TextError,
} from "./styles";
import Showpassword from "../../../assets/icons/Show-password.svg";

export type InputProps = {
  label?: string;
  error?: string;
  secret?: boolean;
  iconLeft?: ReactNode | null;
  iconRight?: ReactNode | null;
  isValid?: boolean;
  isNotValid?: boolean;
  onClickIconLeft?: () => void;
  onClickIconRight?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  label,
  value,
  error,
  secret,
  iconLeft,
  iconRight,
  onFocus: componentOnFocus,
  onBlur: componentOnBlur,
  isValid,
  isNotValid,
  onClickIconLeft,
  onClickIconRight,
  ...props
}: InputProps) => {
  const [isFocus, setFocus] = useState(false);
  const [isSecret, setSecret] = useState(secret);

  return (
    <Container value={value}>
      <InputWrapper
        isFocus={isFocus}
        isValid={!!isValid}
        isNotValid={!!isNotValid}
      >
        {label && value && (
          <Label
            isFocus={isFocus}
            isValid={!!isValid}
            isNotValid={!!isNotValid}
          >
            {label}
          </Label>
        )}
        {!!iconLeft && (
          <IconLeft
            isFocus={isFocus}
            isValid={!!isValid}
            isNotValid={!!isNotValid}
            onClick={onClickIconLeft}
          >
            {iconLeft}
          </IconLeft>
        )}
        <CustomInput
          {...props}
          value={value}
          iconLeft={!!iconLeft}
          iconRight={!!iconRight}
          isFocus={isFocus}
          onFocus={(e) => {
            setFocus(true);
            if (componentOnFocus) {
              componentOnFocus(e);
            }
          }}
          onBlur={(e) => {
            setFocus(false);
            if (componentOnBlur) {
              componentOnBlur(e);
            }
          }}
        />

        {!!iconRight && !!isSecret && (
          <IconRight onClick={() => setSecret(!isSecret)}></IconRight>
        )}
        {!!iconRight && (
          <IconRight onClick={onClickIconRight}>{iconRight}</IconRight>
        )}
      </InputWrapper>
      {error && <TextError>{error}</TextError>}
    </Container>
  );
};

export default Input;
