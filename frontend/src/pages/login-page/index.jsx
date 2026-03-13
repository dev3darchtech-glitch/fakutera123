import { ContentLogin, FooterLogin, HeaderLogin } from "./components";
import "./styles.css";

const LoginPage = () => {
  return (
    <div id="login">
      <HeaderLogin />
      <ContentLogin />
      <FooterLogin />
    </div>
  );
};

export default LoginPage;
