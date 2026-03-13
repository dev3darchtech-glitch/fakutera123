import { useState } from "react";
import { useLanguage } from "../../../../contexts/language-context";
import { login } from "../../../../apis/auth.api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const { t } = useLanguage();
  const navigator = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const validate = () => {
    const newError = { email: "", password: "" };

    if (!form.email) {
      newError.email = t("errEmail");
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newError.email = t("errEmail");
    }

    if (!form.password) {
      newError.password = t("errPass");
    } else if (form.password.length < 4) {
      newError.password = t("errPass1");
    }

    setError(newError);

    return !newError.email && !newError.password;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await login(form);

      Cookies.set("token", res.data.token);
      navigator("/");
    } catch (err) {
      setError({
        ...error,
        email: t(err.response.data.errorKey || "err_user_not_found"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login__content">
      <form className="login__content-form" onSubmit={handleSubmit}>
        <h2>{t("login")}</h2>
        <div className="login__content-group">
          <label>{t("labelEmail")}</label>
          <input
            type="email"
            name="email"
            placeholder={t("placeholderEmail")}
            value={form.email}
            onChange={handleChange}
            required
          />
          {error.email && <p>{error.email}</p>}
        </div>

        <div className="login__content-group">
          <label>{t("labelPassword")}</label>
          <div className="login__content-pass">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder={t("placeholderPass")}
              value={form.password}
              onChange={handleChange}
              required
            />
            <div
              className="login__content-pass--icon"
              onClick={() => setShowPass(!showPass)}
            >
              <img
                src={
                  showPass
                    ? "https://online.123fakturera.se/components/icons/hide_password.png"
                    : "https://online.123fakturera.se/components/icons/show_password.png"
                }
              />
            </div>
          </div>
          {error.password && <p>{error.password}</p>}
        </div>

        <button type="submit" className="login__content-btn" disabled={loading}>
          {loading ? t("loading") : t("login")}
        </button>

        <div className="login__content-other">
          <a href="/login">Register</a>
          <a href="/login">Forgotten password?</a>
        </div>
      </form>
    </section>
  );
};

export default Content;
