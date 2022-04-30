import React, { useState, createContext } from "react";

export const LanguageContext = createContext();
import { translations } from "@lib/translations/translations";

export const LanguageContextProvider = ({ children }) => {
  const [languageSelected, setLanguageSelected] = useState("bg");
  const translationsObj = translations;

  return (
    <LanguageContext.Provider
      value={{
        state: {
          languages: translationsObj[languageSelected],
          languageSelected: languageSelected,
        },
        setLanguageSelected: setLanguageSelected,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
