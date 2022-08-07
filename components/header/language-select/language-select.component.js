import { LanguageContext } from "@context/index";
import React, { useState, useEffect, useContext } from "react";
import { MdLanguage } from "react-icons/md";
import {
  LanguageMenuContainer,
  LanguageMenuItem,
} from "./language-select.styles";

export const LanguageSelect = () => {
  const [currentLanguage, changeCurrentLanguage] = useState("en");
  const [isOpen, toggleOpen] = useState(false);
  const { setLanguageSelected } = useContext(LanguageContext);

  useEffect(() => {
    setLanguageSelected(currentLanguage);
  }, [currentLanguage, setLanguageSelected]);

  const toggleIsOpen = () => {
    toggleOpen((prev) => !prev);
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        <MdLanguage onClick={toggleIsOpen} />

        {isOpen && (
          <LanguageMenuContainer>
            <LanguageMenuItem onClick={() => changeCurrentLanguage("bg")}>
              bg
            </LanguageMenuItem>
            <LanguageMenuItem onClick={() => changeCurrentLanguage("en")}>
              en
            </LanguageMenuItem>
            <LanguageMenuItem onClick={() => changeCurrentLanguage("tr")}>
              tr
            </LanguageMenuItem>
          </LanguageMenuContainer>
        )}
      </div>
    </>
  );
};
