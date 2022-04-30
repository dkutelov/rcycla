import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  font-family: inherit;
  color: white;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.sizes[2]} ${({ theme }) => theme.sizes[5]};
  font-size: 18px;
  font-weight: 400;
  margin-right: ${({ theme }) => theme.sizes[3]};
  cursor: pointer;
`;

export const Button = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};
