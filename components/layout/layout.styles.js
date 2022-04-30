import styled from "styled-components";

export const MainContainer = styled.main`
  margin-top: ${({ theme }) => theme.sizes[11]};
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.primary};
`;
