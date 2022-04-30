import React from "react";

import { LanguageSelect } from "./language-select.component";
import { HeaderContainer } from "./header.styles";
import { Navigation } from "./navigation/navigation.component";
import { Container } from "@lib/theme";
export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <h1>Rcycla</h1>
        <Navigation />
        <LanguageSelect />
      </Container>
    </HeaderContainer>
  );
};
