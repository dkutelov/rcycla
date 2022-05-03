import { LanguageContext } from "@context/index";
import React, { useState, useEffect, useContext } from "react";
import { MdLanguage } from "react-icons/md";
import { LanguageMenuContainer } from "./language-select.styles";

export const LanguageSelect = () => {
  const [currentLanguage, changeCurrentLanguage] = useState("en");
  const [isOpen, toggleOpen] = useState(true);
  const { setLanguageSelected } = useContext(LanguageContext);

  useEffect(() => {
    setLanguageSelected(currentLanguage);
  }, [currentLanguage, setLanguageSelected]);

  const toggleIsOpen = () => {
    toggleOpen((prev) => !prev);
  };
  return (
    <>
      <div>
        <MdLanguage onClick={toggleIsOpen} />
      </div>
      {isOpen && (
        <LanguageMenuContainer>
          <li onClick={() => changeCurrentLanguage("bg")}>bg</li>
          <li onClick={() => changeCurrentLanguage("en")}>en</li>
        </LanguageMenuContainer>
      )}
    </>
  );
};
