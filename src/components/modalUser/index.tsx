import { useState, useEffect } from "react";
import InputField from "../inputField";
import InputSelect from "../inputSelect";
import * as C from "./style";
import axios from "axios";

interface IModalProps {
  onclose?: () => void;
  user?: {
    id?: number;
    name?: string;
    email?: string;
    registration?: string;
    role?: string;
    password?: string;
    isActive?: boolean;
  };
}

const ModalUser = ({ onclose, user }: IModalProps) => {
  const [name, setNome] = useState("");
  const [registration, setRegistration] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [role, setRole] = useState("");
  const [erroSenha, setErroSenha] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isActiveUser, setIsActiveUser] = useState(false);
  const [info, setInfo] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [messagePassword, setMessagePassword] = useState(false);

  useEffect(() => {
    if (user) {
      setNome(user.name || "");
      setRegistration(user.registration || "");
      setEmail(user.email || "");
      setRole(user.role || "");
      setPassword(user.password || "");
      setIsActive(user.isActive || true);
    }
  }, [user]);

  const cleanForm = () => {
    setNome("");
    setRegistration("");
    setPassword("");
    setConfirmaSenha("");
    setRole("");
    setEmail("");
  };

  const resetPassword = () => {
    setPassword("123456");
    setMessagePassword(true);
    setTimeout(() => setMessagePassword(false), 2000);
  };

  const handleSave = async () => {
    try {
      const equipeMapping: Record<string, string> = {
        Recrutamento: "recruitment",
        Técnico: "technique",
        Administrador: "admin",
      };

      if (!user) {
        if (!name || !registration || !password || !confirmaSenha || !role) {
          setInfo("Por favor, preencha todos os campos.");
          return;
        }

        if (password !== confirmaSenha) {
          setErroSenha(true);
          return;
        } else {
          setErroSenha(false);
        }
      }

      const equipeSalvaNoBanco = equipeMapping[role];

      const data = {
        name,
        registration,
        email,
        password,
        role: equipeSalvaNoBanco,
      };

      if (user) {
        await axios.patch(
          `${import.meta.env.VITE_API_GET_ALL_URL}/${user.id}`,
          data
        );
      } else {
        await axios.post(import.meta.env.VITE_API_REGISTER_URL, data);
      }
      cleanForm();
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 2000);
    } catch (error) {
      console.error("Erro ao salvar:", error);
      setShowErrorMessage(true);
      setTimeout(() => setShowErrorMessage(false), 2000);
    }
  };

  const toggleUserStatus = async () => {
    try {
      if (user) {
        await axios.patch(
          `${import.meta.env.VITE_API_GET_ALL_URL}/${user.id}`,
          { isActive: !isActive }
        );
        setIsActive(!isActive);
        setIsActiveUser(true);
        setTimeout(() => setIsActiveUser(false), 2000);
      }
    } catch (error) {
      console.error("Erro ao alterar status do usuário:", error);
    }
  };

  return (
    <C.ModalBG>
      <C.ContainerModal className={user ? "userOn" : ""}>
        <C.ContentTitle>
          {user ? <h2>Edição do usuário</h2> : <h2>Registro novo usuário</h2>}
          {erroSenha && (
            <p style={{ color: "red" }}>As senhas não coincidem.</p>
          )}
          {showSuccessMessage && (
            <p style={{ color: "green" }}>Cadastro concluído com sucesso!</p>
          )}
          {showErrorMessage && (
            <p style={{ color: "red" }}>
              Erro ao salvar. Por favor, tente novamente.
            </p>
          )}
          {isActiveUser && (
            <p style={{ color: "green" }}>Usuario desativado com sucesso</p>
          )}
          {messagePassword && (
            <p style={{ color: "green" }}>Senha resetada com sucesso</p>
          )}
          {info && <p style={{ color: "red" }}> {info}</p>}
          <button onClick={onclose}>X</button>
        </C.ContentTitle>
        <C.ContentsInputs>
          <InputField
            label="Nome do usuário"
            value={name}
            onChange={(e) => setNome(e.target.value)}
          />
          <InputField
            label="Matrícula"
            value={registration}
            onChange={(e) => setRegistration(e.target.value)}
          />
          <InputField
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <C.ContentPassword>
            <InputField
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {user && (
              <C.ResetPassword onClick={resetPassword}>Resetar</C.ResetPassword>
            )}
          </C.ContentPassword>

          {!user && (
            <InputField
              label="Confirme sua senha"
              type="password"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
            />
          )}

          {user ? (
            <InputField
              label="Equipe"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              disabled={true}
            />
          ) : (
            <InputSelect
              options={[" ", "Recrutamento", "Técnico", "Administrador"]}
              label="Equipe"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="register"
            />
          )}
        </C.ContentsInputs>
        <C.ContentButton>
          {user && (
            <C.StyledButton onClick={toggleUserStatus}>
              {user.isActive ? "Desativar Usuário" : "Ativar Usuário"}
            </C.StyledButton>
          )}
          <C.StyledButton onClick={() => handleSave()}>
            {user ? "Salvar Dados" : "Cadastrar Usuário"}
          </C.StyledButton>
        </C.ContentButton>
      </C.ContainerModal>
    </C.ModalBG>
  );
};

export { ModalUser };
