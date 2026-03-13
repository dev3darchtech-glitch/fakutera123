import { Outlet, useNavigate } from "react-router-dom";
import { HeaderLayout, TabsLayout } from "./components";
import "./styles.css";
import Cookies from "js-cookie";
import { useEffect } from "react";

const Layout = () => {
  const token = Cookies.get("token");
  const navigator = useNavigate();

  useEffect(() => {
    if (!token) navigator("/login");
  }, []);

  return (
    <div id="layout">
      <HeaderLayout />
      <div className="layout__main">
        <TabsLayout />
        <div className="layout__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
