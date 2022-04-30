import styled from "styled-components";

export const HeaderContainer = styled.header`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.textColors.main};
  background-color: #eae0d5;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: none;
  display: flex;
  flex-direction: column;
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
