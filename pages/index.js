import styled from "styled-components";

const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return <Title>My page Моята страница с главна буква</Title>;
}
