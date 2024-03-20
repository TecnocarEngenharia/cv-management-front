import React from "react";
import * as C from "./style";
import { useNavigate } from "react-router-dom";

interface TemplateInfoProps {
  role: string;
}

const TemplateInfo: React.FC<TemplateInfoProps> = ({ role }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleAdmin = () => {
    if( role === "admin") {
        navigate('/admin')
    } else {
        alert("Você não tem acesso a essa página")
    }
  }

  return (
    <C.Container>
      <C.InfoWrapper>
        <C.InfoText>Informações</C.InfoText>
      </C.InfoWrapper>
      <C.InfoWrapper>
        <C.InfoText onClick={() => handleAdmin()}>Adminstrador</C.InfoText>
      </C.InfoWrapper>
      <C.InfoWrapper>
        <C.InfoText onClick={() => handleLogout()}>Sair</C.InfoText>
      </C.InfoWrapper>
    </C.Container>
  );
};

export { TemplateInfo };
