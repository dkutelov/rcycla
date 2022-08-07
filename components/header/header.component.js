import React from "react";

import { LanguageSelect } from "./language-select/language-select.component";
import { HeaderContainer } from "./header.styles";
import { Navigation } from "./navigation/navigation.component";
import { Container } from "@lib/theme";
import { Logo } from "./logo.component";

export const Header = () => {
  return (
    <HeaderContainer>
      <Container style={{ height: "100%" }}>
        <Logo />
        <Navigation />
        <LanguageSelect />
      </Container>
    </HeaderContainer>
  );
};
