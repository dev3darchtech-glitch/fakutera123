import { Link } from "react-router-dom";
import { useLanguage } from "../../../../contexts/language-context";
import { useEffect, useRef, useState } from "react";
import IcMenu from "../../../../assets/svgs/ic-menu";
import LangCustom from "../../../../components/lang-custom";

const Header = () => {
  const { t } = useLanguage();
  const width = window.innerWidth;

  const menuRef = useRef(null);

  const [showMenu, setShowMenu] = useState(false);

  const listNav = [
    { title: t("home"), herf: "/login" },
    { title: t("order"), herf: "/login" },
    { title: t("ourCustomers"), herf: "/login" },
    { title: t("aboutUs"), herf: "/login" },
    { title: t("contactUs"), herf: "/login" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="login__header">
      <div className="login__header-main">
        {width < 1280 ? (
          <div onClick={() => setShowMenu(!showMenu)}>
            <IcMenu />
          </div>
        ) : (
          <a href="/" aria-label="Homepage">
            <img
              src="https://storage.123fakturera.se/public/icons/diamond.png"
              alt="logo"
            />
          </a>
        )}
        <div
          className={`login__header-nav ${width < 1280 && showMenu && "login__header-nav--show"}`}
          ref={menuRef}
        >
          {listNav.map((item, index) => (
            <Link to={item.herf} key={index}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <LangCustom />
    </header>
  );
};

export default Header;
