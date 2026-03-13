import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/language-context";
import "./styles.css";

const LangCustom = () => {
  const { t, lang, setLang } = useLanguage();
  const langRef = useRef(null);

  const [showLang, setShowLang] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setShowLang(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="lang" ref={langRef} onClick={() => setShowLang(!showLang)}>
      <p>{t("lang")}</p>
      <img
        src={
          lang === "en"
            ? "https://storage.123fakturere.no/public/flags/GB.png"
            : "https://storage.123fakturere.no/public/flags/SE.png"
        }
        alt="logo language"
      ></img>

      <div className={`lang__box ${showLang && "lang__show"}`}>
        {[
          {
            title: "Svenska",
            logo: "https://storage.123fakturere.no/public/flags/SE.png",
            onClick: () => {
              setLang("sv");
            },
          },
          {
            title: "English",
            logo: "https://storage.123fakturere.no/public/flags/GB.png",
            onClick: () => {
              setLang("en");
            },
          },
        ].map((lang, index) => (
          <div key={index} className="lang__item" onClick={lang.onClick}>
            <p>{lang.title}</p>
            <img src={lang.logo} alt="logo language"></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LangCustom;
