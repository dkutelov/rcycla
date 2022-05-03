import React from "react";

import { LanguageSelect } from "./language-select/language-select.component";
import { HeaderContainer, Logo } from "./header.styles";
import { Navigation } from "./navigation/navigation.component";
import { Container } from "@lib/theme";

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo>Rcycla</Logo>
        <Navigation />
        <LanguageSelect />
      </Container>
    </HeaderContainer>
  );
};
