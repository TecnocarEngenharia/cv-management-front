import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../image/logoTecnocar2.png";
import Play from "../../image/play.svg";
import PlayBlack from "../../image/play_black.svg";
import User from "../../image/user.svg";
import UserBlack from "../../image/user_black.svg";
import Banco from "../../image/banco_de_dados.svg";
import BancoBlack from "../../image/banco_de_dados_black.svg";
import admin from "../../image/admin.svg";
import admin_black from "../../image/admin_black.svg";
import icon_black from "../../image/icon_black.svg";
import icon_white from "../../image/icon_white.svg";
import DropDown from "../../image/menu_dropDown.svg";
import icon_tec from "../../image/icon_tec.svg";
import icon_tec_black from "../../image/icon_tec_black.svg";

import * as C from "./style";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [drop, setDrop] = useState(false);

  const userRole = token
    ? JSON.parse(atob(token.split(".")[1])).userRole
    : null;

  const handleButtonClick = (path: string) => {
    navigate(path);
    setDrop(false)
    if (path === "/login") {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      navigate("/login");
    }
  };

  return (
    <>
      <C.Drop onClick={() => setDrop(!drop)}>
        <img src={DropDown} alt="Drop down menu" />
      </C.Drop>
      {drop && (
        <C.ListHeader>
          <p onClick={() => handleButtonClick("/tutorial")}>Tutorial</p>
          <p onClick={() => handleButtonClick("/")}>
            Cadastro de Candidatos
          </p>
          <p onClick={() => handleButtonClick("/candidates")}>
            Banco de Candidatos
          </p>
          <p onClick={() => handleButtonClick("/Lista")}>Não Avaliados</p>
          {userRole === "admin" && (
            <p onClick={() => handleButtonClick("/admin")}>Adminstrador</p>
          )}
          <C.SairText>Sair</C.SairText>
        </C.ListHeader>
      )}

      <C.Container>
        <C.ImageLogo src={Logo} alt="Logo da empresa Tecnocar engenharia" />
        <C.Content
          className={location.pathname === "/tutorial" ? "active" : "other"}
          onClick={() => handleButtonClick("/tutorial")}
        >
          <img
            src={location.pathname === "/tutorial" ? Play : PlayBlack}
            alt="Icone de play"
          />
          <p className={location.pathname === "/tutorial" ? "active" : "other"}>
            Tutorial
          </p>
        </C.Content>
        {(userRole === "admin" || userRole === "recruitment") && (
          <>
            <C.Content
              className={location.pathname === "/" ? "active" : "other"}
              onClick={() => handleButtonClick("/")}
            >
              <img
                src={location.pathname === "/" ? User : UserBlack}
                alt="Icone de Usuario"
              />
              <p
                className={
                  location.pathname === "/" ? "active" : "other"
                }
              >
                Cadastro de candidatos
              </p>
            </C.Content>
            <C.Content
              className={
                location.pathname === "/candidates" ? "active" : "other"
              }
              onClick={() => handleButtonClick("/candidates")}
            >
              <img
                src={location.pathname === "/candidates" ? Banco : BancoBlack}
                alt="Icone de Banco de Dados"
              />
              <p
                className={
                  location.pathname === "/candidates" ? "active" : "other"
                }
              >
                Banco de candidatos
              </p>
            </C.Content>
            <C.Content
              className={location.pathname === "/Lista" ? "active" : "other"}
              onClick={() => handleButtonClick("/Lista")}
            >
              <img
                src={location.pathname === "/Lista" ? icon_white : icon_black}
                alt="Icone"
              />
              <p
                className={location.pathname === "/Lista" ? "active" : "other"}
              >
                Não avaliados
              </p>
            </C.Content>
          </>
        )}

        {(userRole === "technique" || userRole === "admin") && (
          <C.Content
            className={location.pathname === "/tech" ? "active" : "other"}
            onClick={() => handleButtonClick("/tech")}
          >
            <img
              src={location.pathname === "/tech" ? icon_tec : icon_tec_black}
              alt="Icone de tecnico"
            />
            <p className={location.pathname === "/tech" ? "active" : "other"}>
              Área Tecnica
            </p>
          </C.Content>
        )}

        {userRole === "admin" && (
          <C.Content
            className={location.pathname === "/admin" ? "active" : "other"}
            onClick={() => handleButtonClick("/admin")}
          >
            <img
              src={location.pathname === "/admin" ? admin : admin_black}
              alt="Icone de admin"
            />
            <p className={location.pathname === "/admin" ? "active" : "other"}>
              Área de Administrador
            </p>
          </C.Content>
        )}
        <C.SairText onClick={() => handleButtonClick("/login")}>Sair</C.SairText>
      </C.Container>
    </>
  );
};

export { Header };
