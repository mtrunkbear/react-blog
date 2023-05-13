import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";
import { useUserContext } from "../context/userContext";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const Login: any = () => {
  const [token, setToken] = useState<String>();
  //const [user, setUser] = useState<any>();
  const { user, setUser }: any = useUserContext();

  const handleLogin = async () => {
    window.location.href = "http://localhost:4000/auth/google";
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
          fontSize:"12px",
          border: "none"
        }}
        onClick={handleLogin}
      >
        Iniciar sesión
      </button>
    );
  }

  {
    console.log({ user });
  }
  return (
    <div style={{ width: "200px" }}>
      <h1>Bienvenido!</h1>
    </div>
  );
};

export default Login;
