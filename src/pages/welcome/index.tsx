import * as C from "./style";
import Logo from "../../image/logoTecnocar2.png";
import Icon_Welcome from "../../image/Online world-pana.svg";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <C.Container>
      <C.Logo src={Logo} alt=" Logo Tecnocar" />
      <C.Content>
        <C.ContentInfo>
          <C.Title>Bem Vindo!</C.Title>
          <C.Description>
            É uma honra tê-lo considerando fazer parte da nossa equipe. Cadastre
            seu currículo agora e junte-se a nós
          </C.Description>
          <C.Button onClick={() => navigate("/register")}>
            Cadastre seu curriculo aqui
          </C.Button>
        </C.ContentInfo>
        <C.ContentImage>
          <img src={Icon_Welcome} alt="Icone de boas vindas" />
        </C.ContentImage>
      </C.Content>
    </C.Container>
  );
};

export { Welcome };
