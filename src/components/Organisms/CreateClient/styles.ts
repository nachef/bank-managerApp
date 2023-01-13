import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  overflow: hidden;
`;

export const Container = styled.div`
  padding: 32px;
`;

export const CloseButtonField = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  font-family: "Inter Bold";
  font-size: 22px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SectionForm = styled.div`
  padding: 32px 0;
`;

export const TitleSection = styled.h1`
  font-family: "Inter SemiBold";
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.others.blue};
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  margin-top: 40px;
`;

export const ButtonField = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 16px;

  margin-top: 20px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
