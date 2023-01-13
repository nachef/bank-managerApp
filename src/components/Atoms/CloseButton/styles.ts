import styled from "styled-components";

export const Container = styled.button`
  display: block;
  flex-direction: row;
  width: 50px;
  height: 50px;
  margin-right: 30px;
  border-radius: 8px;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  font-family: "Inter SemiBold";
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
`;
