import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.primary};
`;
