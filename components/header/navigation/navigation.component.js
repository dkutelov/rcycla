import React, { useContext } from "react";
import { LanguageContext } from "@context/index";
import {
  NavigationContainer,
  AuthContainer,
  MainNav,
} from "./navigation.styles";
import { Button } from "@components/common/button/button.component";

export const Navigation = () => {
  const {
    state: { languages },
  } = useContext(LanguageContext);
  let { login, register, offers, requests } = languages;
  return (
    <NavigationContainer>
      <MainNav>
        <li>{offers}</li>
        <li>{requests}</li>
      </MainNav>
      <AuthContainer>
        <li>{login}</li>
        <Button>{register}</Button>
      </AuthContainer>
    </NavigationContainer>
  );
};
