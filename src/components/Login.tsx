import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const APP_URL = import.meta.env.VITE_APP_URL;

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const Login: any = () => {
  const [token, setToken] = useState<String>();

  const handleLogin = () => {
    window.location.href = `${API_URL}/auth/google`;
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = APP_URL;
  };

  const handleToken = () => {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token != null) {
      setToken(token as any);
      localStorage.setItem("token", token as any);
    }
  };

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    //console.log({ tok: tokenFromStorage });
    if (tokenFromStorage != null && tokenFromStorage != "null") {
      setToken(tokenFromStorage);
    } else {
      handleToken();
    }
  }, [token]);

  if (!token) {
    return (
      <button
        style={{
          width: "90px",
          height: "22px",
          background: "rgba(217, 217, 217, 0.09)",
          borderRadius: "18px",
          fontSize: "12px",
          border: "none",
        }}
        onClick={handleLogin}
      >
        Iniciar sesión
      </button>
    );
  } else
    return (
      <button
        style={{
          width: "90px",
          height: "22px",
          background: "rgba(217, 217, 217, 0.09)",
          borderRadius: "18px",
          fontSize: "12px",
          border: "none",
        }}
        onClick={handleLogout}
      >
        Cerrar sesión
      </button>
    );
};

export default Login;
