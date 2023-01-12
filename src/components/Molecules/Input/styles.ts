import styled from "styled-components";

type InputWrapperProps = {
  isValid: boolean;
  isNotValid: boolean;
  isFocus: boolean;
};

type CustomInputProps = {
  iconLeft: boolean;
  iconRight: boolean;
  isFocus: boolean;
};

type IconLeftProps = {
  isValid: boolean;
  isNotValid: boolean;
  isFocus: boolean;
};

export const Container = styled.div<{ value: any }>`
  margin: ${({ value }) => (value ? "6px 0" : "0 0")};
  & + & {
    margin-top: 30px;
  }
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;

  background-color: ${({ isFocus, theme }) =>
    isFocus
      ? theme.colors.background.primary
      : theme.colors.background.secondary};
  border-radius: 10px;

  &:focus-within {
    border: 3px solid
      ${({ isValid, isNotValid, theme }) =>
        isValid
          ? theme.colors.types.success
          : isNotValid
          ? theme.colors.types.error
          : theme.colors.others.green};
  }
`;

export const Label = styled.label<InputWrapperProps>`
  position: absolute;
  top: ${({ isFocus }) => (isFocus ? -8 : -20)}px;
  left: 16px;

  background: ${({ theme }) => theme.colors.background.primary};
  padding: 0 10px;

  border-radius: 10px;

  font-family: "Poppins Medium";
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme, isFocus }) =>
    isFocus ? theme.colors.text.primary : theme.colors.text.secondary};

  transition: all 0.2s ease-in-out;
`;

export const CustomInput = styled.input<CustomInputProps>`
  height: 56px;
  width: 100%;
  background-color: ${({ isFocus, theme }) =>
    isFocus
      ? theme.colors.background.primary
      : theme.colors.background.secondary};

  font-family: "Poppins Medium";
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text.primary};

  display: flex;
  align-items: center;

  border: 0;
  border-radius: 10px;
  outline: 0;

  padding-left: ${({ iconLeft }) => (iconLeft ? "0" : "20px")};
  padding-right: ${({ iconRight }) => (iconRight ? "0" : "20px")};

  &::-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
  }

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-family: "Inter Regular";
    font-size: 14px;
    line-height: 22px;
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    font-family: "Inter Regular";
    font-size: 14px;
    line-height: 22px;
  }
  &::-ms-input-placeholder {
    /* IE 10+ */
    font-family: "Inter Regular";
    font-size: 14px;
    line-height: 22px;
  }
  &::-moz-placeholder {
    /* Firefox 18- */
    font-family: "Inter Regular";
    font-size: 14px;
    line-height: 22px;
  }
`;

export const IconLeft = styled.div<IconLeftProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 20px;

  & path {
    stroke: ${({ isFocus, isValid, isNotValid, theme }) =>
      isValid
        ? theme.colors.others.green
        : isNotValid
        ? theme.colors.others.red
        : isFocus
        ? theme.colors.text.primary
        : theme.colors.text.secondary};
  }
`;

export const IconRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 20px;

  & path {
    stroke: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const TextError = styled.p`
  font-family: "Inter Regular";
  font-size: 12px;
  line-height: 20px;

  margin-left: 16px;

  color: ${({ theme }) => theme.colors.others.red};
`;
