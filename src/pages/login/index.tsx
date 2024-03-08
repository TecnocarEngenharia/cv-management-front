import * as C from "./style";
import Logo from "../../image/logoTecnocar2.svg";
import InputField from "../../components/inputField";
import { FormEvent } from "../../types/types";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    registration: "",
    password: "",
  });
  const [error, setError] = useState("");

  const cleanForm = () => {
    setFormData({ registration: "", password: "" });
  };

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    if (getToken) {
      setTimeout(() => {
        navigate("/tutorial");
      }, 1000);
    } else {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);

      const response = await axios.post(
        import.meta.env.VITE_API_LOGIN_URL,
        formData
      );
      localStorage.setItem("token", response.data.token);


      const expirationTime = new Date(Date.now() + 24 * 60 * 60 * 1000); 
      localStorage.setItem("tokenExpiration", expirationTime.toISOString());

      setTimeout(() => {
        setLoading(false);
        navigate("/tutorial");
      }, 1000);
    } catch (error: any) {
      setTimeout(() => {
        setError("");
        cleanForm();
      }, 2000);

      setError(
        error.response?.data?.message ||
          "Erro na comunicação com o servidor" ||
          error.message
      );
      console.error("Erro na requisição:", error);
      setLoading(false);
    }
  };
  return (
    <C.Container>
      <C.ContentCard>
        <C.ContentCracha></C.ContentCracha>
        <C.ContentLogo>
          <C.Image src={Logo} alt="" className={error ? "" : "errorTrue"} />
          {error && <p> {error}</p>}
        </C.ContentLogo>
        <C.ContentForm onSubmit={handleSubmit}>
          <C.ContainerInputs>
            <InputField
              label="Matrícula"
              required={true}
              name="matricula"
              value={formData.registration}
              onChange={(e) =>
                setFormData({ ...formData, registration: e.target.value })
              }
            />
            <C.ContentPassword>
              <InputField
                label="Senha"
                type="password"
                required={true}
                name="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </C.ContentPassword>
          </C.ContainerInputs>

          <C.Forgotpassword>Esqueceu a senha?</C.Forgotpassword>

          <C.Buttons type="submit" className={loading ? "loading" : ""}>
            {loading ? <p> Entrando...</p> : <p>Entrar</p>}
          </C.Buttons>
        </C.ContentForm>
      </C.ContentCard>
    </C.Container>
  );
};

export { Login };
