import styled from "styled-components";

export const Container = styled.div`
  height: 1px;

  background: ${({ theme }) => theme.colors.others.green};

  margin: 0;
  padding: 0;
`;

const Line = () => {
  return <Container></Container>;
};

export default Line;
