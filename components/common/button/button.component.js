import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  font-family: inherit;
  color: white;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 9px 26px;
  font-size: 18px;
  font-weight: 400;
  margin: 8px;
`;

export const Button = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};
