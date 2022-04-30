import React, { useContext } from "react";
import { AiOutlineUser, AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineRequestPage } from "react-icons/md";
import { LanguageContext } from "@context/index";
import {
  NavigationContainer,
  AuthContainer,
  MainNav,
} from "./navigation.styles";
import { IconMenuItem, Button } from "@components/common/index";

export const Navigation = () => {
  const {
    state: { languages },
  } = useContext(LanguageContext);
  let { login, register, offers, requests } = languages;
  return (
    <NavigationContainer>
      <MainNav>
        <li>
          <IconMenuItem Icon={MdOutlineRequestPage} text={offers} />
        </li>
        <li>
          <IconMenuItem Icon={AiOutlineQuestionCircle} text={requests} />
        </li>
      </MainNav>
      <AuthContainer>
        <IconMenuItem Icon={AiOutlineUser} text={login} />
        <Button>{register}</Button>
      </AuthContainer>
    </NavigationContainer>
  );
};
