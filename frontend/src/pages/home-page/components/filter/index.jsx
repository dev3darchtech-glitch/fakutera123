import { useLanguage } from "../../../../contexts/language-context";
import IcSearch from "../../../../assets/svgs/ic-search";

const Filter = () => {
  const { t } = useLanguage();

  return (
    <div className="home__filter">
      <div className="home__filter-input">
        <input type="text" placeholder={t("placeholderArticle")}></input>
        <div className="home__filter-icon">
          <IcSearch />
        </div>
      </div>
      <div className="home__filter-input">
        <input type="text" placeholder={t("placeholderSearchProduct")}></input>
        <div className="home__filter-icon">
          <IcSearch />
        </div>
      </div>
    </div>
  );
};

export default Filter;
