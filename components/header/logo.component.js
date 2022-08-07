import React from "react";
import Image from "next/image";
import { LogoContainer } from "./header.styles";

export const Logo = () => {
  return (
    <LogoContainer>
      <Image src="/images/logo.png" layout="fill" alt="Company logo" />;
    </LogoContainer>
  );
};
