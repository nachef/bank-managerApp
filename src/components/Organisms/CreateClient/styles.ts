import styled from "styled-components";

export const Container = styled.div`
  padding: 32px;
`;

export const Title = styled.h1`
  font-family: "Poppins Bold";
  font-size: 22px;
  line-height: 30px;
  color: ${({ theme }) => theme.text.primary};
`;

export const SectionForm = styled.div`
  padding: 32px 0;
`;

export const TitleSection = styled.h1`
  font-family: "Poppins SemiBold";
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.others.blue};
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  margin-top: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-top: 20px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
