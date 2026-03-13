import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "../components/not-found";
import { HomePage, LoginPage } from "../pages";
import Layout from "../pages/layout";
import { useEffect } from "react";

const RouterContainer = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default RouterContainer;
