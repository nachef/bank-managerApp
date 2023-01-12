import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-family: "Inter Bold";
  font-size: 28px;
  line-height: 36px;

  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Description = styled.p`
  font-family: "Inter Medium";
  font-size: 16px;
  line-height: 24px;
  margin-top: -10px;
  color: ${({ theme }) => theme.colors.text.primary};
`;
