import React, { useContext } from "react";

import { MdOutlineInventory2 } from "react-icons/md";
import { IoIosContacts, IoMdInformationCircleOutline } from "react-icons/io";
import { RiRecycleLine } from "react-icons/ri";

import { LanguageContext } from "@context/index";

import {
  NavigationContainer,
  AuthContainer,
  MainNav,
} from "./navigation.styles";
import { IconMenuItem, Button } from "@components/common/index";
import { getTheme } from "@lib/theme/theme";
import { K } from "@lib/utils/constants";

export const Navigation = () => {
  const {
    state: { languages },
  } = useContext(LanguageContext);
  let { login, join, products, about, ecology, contacts } = languages;
  const theme = getTheme();

  return (
    <NavigationContainer>
      <MainNav>
        <li>
          <IconMenuItem
            Icon={() => <MdOutlineInventory2 size={K.menuIconSize} />}
            text={products}
            textColor={theme.colors.terciary}
          />
        </li>
        <li>
          <IconMenuItem
            Icon={() => <RiRecycleLine size={K.menuIconSize} />}
            text={ecology}
            textColor={theme.colors.terciary}
          />
        </li>
        <li>
          <IconMenuItem
            Icon={() => <IoMdInformationCircleOutline size={K.menuIconSize} />}
            text={about}
            textColor={theme.colors.terciary}
          />
        </li>
        <li>
          <IconMenuItem
            Icon={() => <IoIosContacts size={K.menuIconSize} />}
            text={contacts}
            textColor={theme.colors.terciary}
          />
        </li>
      </MainNav>
      <AuthContainer>
        <Button>{join}</Button>
      </AuthContainer>
    </NavigationContainer>
  );
};
