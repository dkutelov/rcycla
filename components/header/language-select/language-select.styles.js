import styled from "styled-components";

export const LanguageMenuContainer = styled.ul`
  position: fixed;
  z-index: 1300;
  inset: 0px;
  opacity: 1;
  transform: none;
  height: 216px;
  transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 186ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  top: 31px;
  left: 1426px;
  transform-origin: 0px 0px;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
    rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  position: absolute;
  overflow: hidden auto;
  width: 36px;
  min-height: 16px;
  outline: 0px;
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
