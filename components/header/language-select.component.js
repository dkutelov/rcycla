import { LanguageContext } from "@context/index";
import React, { useState, useEffect, useContext } from "react";
import { MdLanguage } from "react-icons/md";

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
      <div>
        <MdLanguage onClick={toggleIsOpen} />
      </div>
      {isOpen && (
        <ul>
          <li onClick={() => changeCurrentLanguage("bg")}>bg</li>
          <li onClick={() => changeCurrentLanguage("en")}>en</li>
        </ul>
      )}
    </>
  );
};
