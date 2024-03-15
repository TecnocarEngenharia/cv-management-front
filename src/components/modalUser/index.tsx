import { useState, useEffect } from "react";
import InputField from "../inputField";
import InputSelect from "../inputSelect";
import * as C from "./style";
import axios from "axios";

interface IUser {
  id?: number;
  name?: string;
  email?: string;
  registration?: string;
  role?: string;
  password?: string;
  isActive?: boolean;
}

interface IModalProps {
  onclose?: () => void;
  user?: IUser;
}

const ModalUser = ({ onclose, user }: IModalProps) => {
  const [name, setName] = useState("");
  const [registration, setRegistration] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [role, setRole] = useState("");
  const [erroSenha, setErroSenha] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    if (user) {
      const { name, registration, email, role, password } = user;
      setName(name || "");
      setRegistration(registration || "");
      setEmail(email || "");
      setRole(role || "");
      setPassword(password || "");
    }
  }, [user]);

  const cleanForm = () => {
    setName("");
    setRegistration("");
    setPassword("");
    setConfirmaSenha("");
    setRole("");
    setEmail("");
  };

  const resetPassword = () => {
    setPassword("123456789");
    setFeedbackMessage({ text: "Senha resetada com sucesso", type: "success" });
    setTimeout(() => setFeedbackMessage(null), 2000);
  };

  const handleSave = async () => {
    try {
      if (!name || !registration || !password || !confirmaSenha || !role) {
        setFeedbackMessage({ text: "Por favor, preencha todos os campos.", type: "error" });
        return;
      }

      if (password !== confirmaSenha) {
        setErroSenha(true);
        return;
      } else {
        setErroSenha(false);
      }

      const equipeMapping: Record<string, string> = {
        Recrutamento: "recruitment",
        Técnico: "technique",
        Administrador: "admin",
      };

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
      setFeedbackMessage({ text: "Cadastro concluído com sucesso!", type: "success" });
      setTimeout(() => setFeedbackMessage(null), 2000);
    } catch (error) {
      console.error("Erro ao salvar:", error);
      setFeedbackMessage({ text: "Erro ao salvar. Por favor, tente novamente.", type: "error" });
      setTimeout(() => setFeedbackMessage(null), 2000);
    }
  };

  const toggleUserStatus = async () => {
    try {
      if (user && user.isActive !== undefined) {
        const isActive = !user.isActive;
        await axios.patch(
          `${import.meta.env.VITE_API_GET_ALL_URL}/${user.id}`,
          { isActive }
        );
        setFeedbackMessage({ text: isActive ? "Usuário ativado com sucesso" : "Usuário desativado com sucesso", type: "success" });
        setTimeout(() => setFeedbackMessage(null), 2000);
      } else {
        console.error("Usuário não está definido ou 'isActive' é 'undefined'");
      }
    } catch (error) {
      console.error("Erro ao alterar status do usuário:", error);
      setTimeout(() => setFeedbackMessage(null), 2000);
    }
  };

  return (
    <C.ModalBG>
      <C.ContainerModal className={user ? "userOn" : ""}>
        <C.ContentTitle>
          <h2>{user ? "Edição do usuário" : "Registro novo usuário"}</h2>
          {erroSenha && <p style={{ color: "red" }}>As senhas não coincidem.</p>}
          {feedbackMessage && <p style={{ color: feedbackMessage.type === "success" ? "green" : "red" }}>{feedbackMessage.text}</p>}
          <button onClick={onclose}>X</button>
        </C.ContentTitle>
        <C.ContentsInputs>
          <InputField
            label="Nome do usuário"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <C.StyledButton onClick={handleSave}>
            {user ? "Salvar Dados" : "Cadastrar Usuário"}
          </C.StyledButton>
        </C.ContentButton>
      </C.ContainerModal>
    </C.ModalBG>
  );
};

export { ModalUser };
