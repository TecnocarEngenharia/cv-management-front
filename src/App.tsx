import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "./components/header";
import "./index.css";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tokenExpiration = localStorage.getItem("tokenExpiration");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token && tokenExpiration) {
      const expirationTime = new Date(tokenExpiration);
      const currentTime = new Date();

      if (currentTime > expirationTime) {
        // Token expirado, remover token e redirecionar para tela inicial
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
        navigate("/");
      } else {
        // Token ainda é válido, agendar a remoção do token após o tempo de expiração
        const expirationTimeout = expirationTime.getTime() - currentTime.getTime();
        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
          navigate("/");
        }, expirationTimeout);
      }
    }
  }, [token, tokenExpiration, navigate]);

  return (
    <div className="Content">
      {token &&
        !(
          location.pathname === "/" ||
          location.pathname.startsWith("/curriculum/")
        ) && <Header />}
    </div>
  );
};

export { App };