import { Link } from "react-router-dom";
import { useLanguage } from "../../../../contexts/language-context";

const Footer = () => {
  const { t } = useLanguage();

  const listNav = [
    { title: t("home"), herf: "/login" },
    { title: t("order"), herf: "/login" },
    { title: t("contactUs"), herf: "/login" },
  ];

  return (
    <div className="login__footer">
      <div className="login__footer-top">
        <p>123 Fakturera</p>
        <div className="login__footer-nav">
          {listNav.map((item, index) => (
            <Link to={item.herf} key={index}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="login__footer-bottom">
        © Lättfaktura, CRO no. 638537, 2025. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
