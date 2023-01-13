import styled from "styled-components";

type ContainerProps = {
  width?: number;
};
export const Container = styled.button<ContainerProps>`
  width: ${({ width }) => (width ? width : 100)}%;
  height: 50px;
  border-radius: 8px;

  outline: none;
  border: none;

  background: ${({ theme }) => theme.colors.others.lightBlue};

  font-family: "Inter Medium";
  font-size: 16px;
  color: ${({ theme }) => theme.colors.background.secondary};

  cursor: ${({ disabled }) => (!disabled ? "pointer" : "auto")};
  opacity: ${({ disabled }) => (!disabled ? 1 : 0.5)};

  @media (max-width: 900px) {
    width: 100%;
  }
`;
