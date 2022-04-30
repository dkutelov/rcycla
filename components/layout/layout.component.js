import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "../header/header.component";
import { getTheme, GlobalStyle } from "@lib/theme";
import { LanguageContext } from "@context/index";
import { MainContainer } from "./layout.styles";

export const Layout = ({ children }) => {
  const {
    state: { languageSelected },
  } = useContext(LanguageContext);

  return (
    <ThemeProvider theme={getTheme(languageSelected)}>
      <GlobalStyle />
      <Header />
      <MainContainer>{children}</MainContainer>
    </ThemeProvider>
  );
};
