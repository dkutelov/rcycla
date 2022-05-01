import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: ${({ theme }) => theme.sizes[11]};
  background-color: ${({ theme }) => theme.colors.bgColor};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.textColors.main};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  z-index: 1100;
  top: 0px;
  left: auto;
  right: 0px;
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.sizes[6]};
  margin: 0;
`;
