import styled from "styled-components";

export const Container = styled.button`
  width: 150px;
  height: 56px;
  border-radius: 10px;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.others.lightBlue};

  font-family: "Inter Medium";
  font-size: 16px;
  color: ${({ theme }) => theme.colors.background.secondary};

  cursor: ${({ disabled }) => (!disabled ? "pointer" : "auto")};
  &:hover {
    opacity: 0.9;
  }
  @media (max-width: 900px) {
    width: 64%;
  }
`;
