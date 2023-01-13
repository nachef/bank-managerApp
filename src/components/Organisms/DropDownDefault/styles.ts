import styled from "styled-components";

interface SelectWrapperProps {
  isFocus: boolean;
}

export const Container = styled.div`
  width: 100%;

  & svg {
    margin-right: 20px;
  }

  & path {
    stroke: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const SelectField = styled.div<SelectWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 56px;
  width: 100%;

  background-color: ${({ isFocus, theme }) =>
    isFocus
      ? theme.colors.background.primary
      : theme.colors.background.secondary};
  border: ${({ isFocus, theme }) =>
    isFocus ? `3px solid ${theme.colors.types.info}` : "0"};
  border-radius: 10px;

  outline: 0;
  cursor: pointer;
`;

export const Label = styled.label<SelectWrapperProps>`
  position: absolute;
  top: ${({ isFocus }) => (isFocus ? -8 : -20)}px;
  left: 16px;

  background: ${({ theme }) => theme.colors.background.primary};
  padding: 0 10px;

  border-radius: 10px;

  font-family: "Inter Medium";
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme, isFocus }) =>
    isFocus ? theme.colors.text.primary : theme.colors.text.secondary};

  transition: all 0.2s ease-in-out;
`;

export const SelectText = styled.p`
  font-family: "Inter Medium";
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text.primary};

  margin: 0 20px;

  #placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: "Inter Regular";
    font-size: 14px;
    line-height: 22px;
  }
`;

export const OptionsField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 200px;
  overflow: auto;

  margin-top: 8px;
  padding: 8px 20px;
  outline: 0;

  color: ${({ theme }) => theme.colors.text.primary};
  background: transparent;

  border: 1px solid ${({ theme }) => theme.colors.utils.border};
  border-radius: 10px;
`;

export const Option = styled.div`
  width: 100%;
  cursor: pointer;

  p {
    font-family: "Inter Regular";
    font-size: 14px;
    line-height: 22px;
  }

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.utils.border};
  }
`;

export const TextError = styled.p`
  font-family: "Inter Regular";
  font-size: 12px;
  line-height: 20px;

  margin-left: 16px;

  color: ${({ theme }) => theme.colors.others.red};
`;
