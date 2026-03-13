import axios from "axios";
import Cookies from "js-cookie";

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://fakutera123-production.up.railway.app/api",
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.request.use((config) => {
      const token = Cookies.get("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (
          (error.response && error.response.status === 403) ||
          error.response.status === 401
        ) {
          Cookies.remove("token");

          setTimeout(() => {
            window.location.href = "/login";
          }, 2000);
        }

        return Promise.reject(error);
      },
    );
  }
}

const http = new Http().instance;

export default http;
