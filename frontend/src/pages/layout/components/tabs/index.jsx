import { useLanguage } from "../../../../contexts/language-context";
import IcFile from "../../../../assets/svgs/ic-file";
import IcUser from "../../../../assets/svgs/ic-user";
import IcSetting from "../../../../assets/svgs/ic-setting";
import IcBook from "../../../../assets/svgs/ic-book";
import IcPrice from "../../../../assets/svgs/ic-price";
import IcCloseFull from "../../../../assets/svgs/ic-close-full";
import IcOffer from "../../../../assets/svgs/ic-offer";
import IcControl from "../../../../assets/svgs/ic-control";
import IcMembership from "../../../../assets/svgs/ic-membership";
import IcImport from "../../../../assets/svgs/ic-import";
import IcLogout from "../../../../assets/svgs/ic-logout";
import IcCollection from "../../../../assets/svgs/ic-collection";
import IcMenu from "../../../../assets/svgs/ic-menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";

const Tabs = () => {
  const { t } = useLanguage();
  const navigator = useNavigate();
  const location = useLocation();
  const width = window.innerWidth;

  const menuRef = useRef(null);

  const [showMenu, setShowMenu] = useState(false);

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

  const listMenu = [
    { title: t("invoices"), link: "/invoices", icon: <IcFile /> },
    {
      title: t("customers"),
      link: "/customers",
      icon: <IcUser width="24px" color="#66FF99" />,
    },
    {
      title: t("myBusiness"),
      link: "/my-business",
      icon: <IcSetting width="24px" color="#7bf1f1" />,
    },
    {
      title: t("invoiceJournal"),
      link: "/invoice-journal",
      icon: <IcBook width="24px" color="#CCFFFF" />,
    },
    {
      title: t("priceList"),
      link: "/",
      icon: <IcPrice width="24px" color="#FF9933" />,
    },
    {
      title: t("multipleInvoicing"),
      link: "/multiple-invoicing",
      icon: <IcFile />,
    },
    {
      title: t("unpaidInvoices"),
      link: "/unpaid-invoices",
      icon: <IcCloseFull width="24px" />,
    },
    { title: t("offer"), link: "/offer", icon: <IcOffer width="24px" /> },
    {
      title: t("inventoryControl"),
      link: "/inventory-control",
      icon: <IcControl width="24px" />,
    },
    {
      title: t("memberInvoicing"),
      link: "/member-invoicing",
      icon: <IcMembership width="24px" />,
    },
    {
      title: t("importExport"),
      link: "/import-export",
      icon: <IcImport width="24px" />,
    },
    {
      title: t("logout"),
      link: "/login",
      icon: <IcLogout width="24px" />,
      onClick: () => {
        Cookies.remove("token");
      },
    },
  ];

  return (
    <>
      <div
        className={`layout__tabs-icon ${showMenu && "layout__tabs-icon--show"}`}
        onClick={() => {
          if (showMenu) {
            setShowMenu(false);
          } else {
            setShowMenu(true);
          }
        }}
      >
        <IcMenu color={"#000"} size="20px" />
      </div>
      <div
        className={`layout__tabs ${showMenu && "layout__tabs-show"}`}
        ref={menuRef}
      >
        <div className="layout__tabs-header">{t("menu")}</div>
        <div className={`layout__tabs-content`}>
          {listMenu.map((item, index) => (
            <div
              className={`layout__tabs-item ${location.pathname === item.link && "layout__tabs-item--seleted"}`}
              key={index}
              onClick={() => {
                if (item.onClick) item.onClick();
                navigator(item.link);
                setShowMenu(false);
              }}
            >
              {item.icon}
              <p>{item.title}</p>
            </div>
          ))}

          {width < 1280 && width > 480 && (
            <div className="layout__tabs-item--other">
              <div
                className={`layout__tabs-item layout__tabs-item--show`}
                onClick={() => setShowMenu(!showMenu)}
              >
                <IcCollection width="24px" />
                <p>{t("collapse")}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tabs;
