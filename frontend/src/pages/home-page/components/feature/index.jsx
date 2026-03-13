import { useLanguage } from "../../../../contexts/language-context";
import IcMenu from "../../../../assets/svgs/ic-menu";
import IcAdd from "../../../../assets/svgs/ic-add";
import IcPrint from "../../../../assets/svgs/ic-print";
import IcMode from "../../../../assets/svgs/ic-mode";

const Feature = () => {
  const { t } = useLanguage();
  const width = window.innerWidth;

  const listFeature = [
    {
      title: t("newProduct"),
      icon: <IcAdd width={width < 1280 ? "20px" : "15px"} />,
      onclick: () => {},
    },
    {
      title: t("printList"),
      icon: <IcPrint width={width < 1280 ? "20px" : "15px"} />,
      onclick: () => {},
    },
    {
      title: t("advancedMode"),
      icon: <IcMode width={width < 1280 ? "20px" : "15px"} />,
      onclick: () => {},
    },
  ];

  return (
    <div className="home__feature">
      {listFeature.map((item, index) => (
        <div className="home__feature-item" key={index} onClick={item.onclick}>
          <p>{item.title}</p>
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default Feature;
