import React, { useContext } from "react";
import { AiOutlineUser, AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { LanguageContext } from "@context/index";
import {
  NavigationContainer,
  AuthContainer,
  MainNav,
} from "./navigation.styles";
import { IconMenuItem, Button } from "@components/common/index";
import { getTheme } from "@lib/theme/theme";

export const Navigation = () => {
  const {
    state: { languages },
  } = useContext(LanguageContext);
  let { login, register, offers, requests } = languages;
  const theme = getTheme();

  return (
    <NavigationContainer>
      <MainNav>
        <li>
          <IconMenuItem
            Icon={() => <MdOutlineLocalOffer size={32} />}
            text={offers}
            textColor={theme.colors.terciary}
          />
        </li>
        <li>
          <IconMenuItem
            Icon={() => <AiOutlineQuestionCircle size={32} />}
            text={requests}
            textColor={theme.colors.terciary}
          />
        </li>
      </MainNav>
      <AuthContainer>
        <IconMenuItem Icon={AiOutlineUser} text={login} />
        <Button>{register}</Button>
      </AuthContainer>
    </NavigationContainer>
  );
};
