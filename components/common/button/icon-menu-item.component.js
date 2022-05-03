import React from "react";
import styled from "styled-components";
import { getTheme } from "@lib/theme/theme";

const MenuItem = styled.a`
  display: flex;
  align-items: center;
  font-family: inherit;
  padding: ${({ theme }) => theme.sizes[1]};
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  margin-right: ${({ theme }) => theme.sizes[0]};
  font-weight: 400;
  cursor: pointer;
`;

const Text = styled.span`
  display: block;
  margin-left: ${({ theme }) => theme.sizes[1]};
`;

export const IconMenuItem = ({ Icon, text, textColor }) => {
  const theme = getTheme();
  return (
    <MenuItem style={{ color: textColor || theme.colors.primary }}>
      <Icon />
      <Text>{text}</Text>
    </MenuItem>
  );
};
