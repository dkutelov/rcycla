import React from "react";
import styled from "styled-components";

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.sizes[1]} ${({ theme }) => theme.sizes[5]};
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  font-weight: 400;
  cursor: pointer;
`;

const Text = styled.span`
  display: block;
  margin-left: ${({ theme }) => theme.sizes[1]};
`;

export const IconMenuItem = ({ Icon, text }) => {
  return (
    <MenuItem>
      <Icon />
      <Text>{text}</Text>
    </MenuItem>
  );
};
