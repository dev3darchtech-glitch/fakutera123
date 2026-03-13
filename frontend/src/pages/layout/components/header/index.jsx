import LangCustom from "../../../../components/lang-custom";
import avatar from "../../../../assets/images/avatar.png";

const Header = () => {
  return (
    <header className="layout__header">
      <div className="layout__header-user">
        <div className="layout__header-avatar">
          <img src={avatar} alt="avatar" />
          <div className="layout_header-dot" />
        </div>
        <div className="layout__header-infor">
          <p className="layout__header-name">John Andre</p>
          <p className="layout__header-position">Jtorfjord As</p>
        </div>
      </div>
      <LangCustom />
    </header>
  );
};

export default Header;
