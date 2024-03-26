import * as C from "./style";
import Logo from "../../image/logoTecnocar2.png";
import { useState } from "react";
import InputField from "../inputField";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IModalBoasVindasProps {
  closeModal?: () => void;
  name?: string;
  id?: number;
}

const ModalBoasVindas = ({ closeModal, name, id }: IModalBoasVindasProps) => {
  const [reset, setReset] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [feedBack, setFeedBack] = useState("");
  const navigate = useNavigate();

  const cleanForm = () => {
    setConfirmPassword("");
    setPassword("");
  };

  const handleConfirm = () => {
    if (password === confirmPassword) {
      handlePassword();
    } else {
      setFeedBack("Senhas não coicidem");
      cleanForm();
      setTimeout(() => {
        setFeedBack("");
      }, 2000);
    }
  };

  const handlePassword = () => {
    axios
      .patch(`${import.meta.env.VITE_API_GET_ALL_URL}/${id}`, {
        password: password,
        firstTime: true,
      })
      .then(() => {
        setFeedBack(
          "Senha alterada com sucesso. Você será desconectado em 2 segundos."
        );
        cleanForm();
        setTimeout(() => {
          setFeedBack("");
          if (typeof closeModal === "function") {
            closeModal();
          }
        }, 2000);
        setTimeout(() => {
          localStorage.removeItem("tokenExpiration");
          localStorage.removeItem("token");
          setFeedBack("Você foi desconectado.");
          setTimeout(() => {
            setFeedBack("");
            navigate("/login");
          }, 2000);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error changing password:", error);
        setFeedBack(
          "Ocorreu um erro ao alterar a senha. Por favor, tente novamente mais tarde."
        );
        setTimeout(() => {
          setFeedBack("");
        }, 2000);
      });
  };

  return (
    <>
      <C.ModalBG>
        <C.Container>
          <C.ContentLeft>
            <C.InfoWelcome>
              Olá, seja bem-vindo, {name}! Este é o seu primeiro acesso à
              plataforma. Para melhor uso, recomendamos que você altere sua
              senha.
            </C.InfoWelcome>
            <C.ContentButton>
              <button onClick={() => setReset(!reset)}>Alterar Senha</button>
            </C.ContentButton>
          </C.ContentLeft>
          <C.ContentRight>
            <img src={Logo} alt="Logo" />
          </C.ContentRight>
        </C.Container>
      </C.ModalBG>

      {reset && (
        <C.ModalBG>
          <C.ContentPassword>
            <C.ContentForm>
              <C.Title
                className={
                  feedBack === "Senha alterada com sucesso" ||
                  feedBack ===
                    "Senha alterada com sucesso. Você será desconectado em 2 segundos."
                    ? "success"
                    : feedBack === "Senhas não coicidem"
                    ? "error"
                    : ""
                }
              >
                {feedBack ? feedBack : "Alteração de Senha"}
              </C.Title>
              <div>
                <InputField
                  label="Nova Senha"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="resetPassword"
                />
                <InputField
                  label="Confirmar Senha"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="resetPassword"
                />
              </div>
              <C.ContentButton>
                <button className="ButtonsReset" onClick={handleConfirm}>
                  Resetar
                </button>
              </C.ContentButton>
            </C.ContentForm>
          </C.ContentPassword>
        </C.ModalBG>
      )}
    </>
  );
};

export default ModalBoasVindas;
