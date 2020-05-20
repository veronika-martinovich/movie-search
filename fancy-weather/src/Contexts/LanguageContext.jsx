import React from "react";

export const languages = ['en', 'ru', 'be'];
export const LanguageContext = React.createContext({
  language: languages[0],
  changeLanguage: () => {}
});
