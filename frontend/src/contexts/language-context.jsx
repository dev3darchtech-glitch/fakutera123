/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { getContent } from "../apis/content.api";
import { translations } from "../constants/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [translationApi, setTranslationApi] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await getContent();
        setTranslationApi(res?.data || translations);

        console.log(res.data);
      } catch (error) {
        console.error("Failed to load translations", error);
        setTranslationApi(translations);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const t = (key) => translationApi?.[key]?.[lang] || key;

  if (loading) {
    return (
      <div className="loading">
        {lang === "en" ? "Loading..." : "Laddar data..."}
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
