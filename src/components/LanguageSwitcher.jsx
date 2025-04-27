import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <button onClick={() => changeLanguage("ky")}>Кыргызча</button>
      <button onClick={() => changeLanguage("ru")}>Русский</button>
      <button onClick={() => changeLanguage("en")}>English</button>
    </div>
  );
}

export default LanguageSwitcher;
