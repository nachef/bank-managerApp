import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const FormField = styled.div`
  margin-top: 20px;
`;

export const InputsField = styled.div``;

export const ButtonField = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
`;

export const CreateAccountField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
`;

export const AccountText = styled.p`
  font-size: 16px;
  font-family: "Inter Medium";
`;

export const CreateAccount = styled.p`
  font-size: 16px;
  font-family: "Inter Medium";
  cursor: pointer;
  color: ${({ theme }) => theme.colors.others.lightBlue};
  margin-left: 5px;
`;
