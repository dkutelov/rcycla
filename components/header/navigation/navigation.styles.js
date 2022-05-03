import styled from "styled-components";

export const NavigationContainer = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AuthContainer = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const MainNav = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 ${({ theme }) => theme.sizes[2]};
  margin: 0;
  list-style: none;
`;
