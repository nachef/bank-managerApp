import styled from "styled-components";

export const Container = styled.div`
  padding: 0 24px;
`;

export const WrapperHeadTable = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 50px 0 0px;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 32px;
  }
`;

export const NoData = styled.p`
  font-family: "Inter Medium";
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text.primary};
`;
