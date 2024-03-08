import { useState, ChangeEvent, useEffect } from "react";
import InputField from "../inputField";
import * as C from "./style";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Experiencia {
  empresa: string;
  cargo: string;
  esta_atualmente: boolean;
  periodo_inicial: string;
  periodo_final: string;
  atividades: string[]; // Agora atividades é um array de strings
}

interface IModalProps {
  toggleModal: () => void;
}

const ModalExperiencia = ({ toggleModal }: IModalProps) => {
  const { id } = useParams();
  const [experiencieList, setExperiencieList] = useState<Experiencia[]>([]);
  const [experiencias, setExperiencias] = useState<Experiencia>({
    empresa: "",
    cargo: "",
    esta_atualmente: false,
    periodo_inicial: "",
    periodo_final: "",
    atividades: [],
  });
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}${id}`
        );
        const { data } = response;
        if (data && data.experiencias) {
          setExperiencieList(data.experiencias);
        }
        console.log("Experiencias ", data.experiencias);
      } catch (error) {
        console.error("Erro ao carregar experiencias:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setExperiencias((prevState) => ({
      ...prevState,
      [name]: name === "atividades" ? value.split(".") : newValue, // Separar as atividades por ponto (".")
    }));
  };

  const handlePatchExperiencies = async () => {
    try {
      const experienciesToUpdate = experiencieList.map((experiencia) => ({
        ...experiencia,
      }));
      await axios.patch(`${import.meta.env.VITE_API_URL}${id}`, {
        experiencias: experienciesToUpdate,
      });
      setFeedbackMessage("Experiências profissionais salvas com sucesso!");
      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    } catch (error) {
      console.log("Error ao enviar as experiencias", error);
    }
  };

  const handleRegister = () => {
    if (
      experiencias.empresa &&
      experiencias.cargo &&
      experiencias.periodo_inicial &&
      experiencias.atividades.length > 0 // Verifica se há pelo menos uma atividade
    ) {
      const updatedExperienciesList = [...experiencieList, experiencias];
      setExperiencieList(updatedExperienciesList);
      setFeedbackMessage("Experiência adicionada com sucesso!");
      console.log("Dados do fómulario:", updatedExperienciesList);
      setExperiencias({
        empresa: "",
        cargo: "",
        esta_atualmente: false,
        periodo_inicial: "",
        periodo_final: "",
        atividades: [],
      });
      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    } else {
      setFeedbackMessage("Por favor, preencha todos os campos.");
      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    }
  };

  return (
    <C.ModalBG>
      <C.ContentModal>
        <C.ContentTitle>
          <h1>Experiencias Profissional</h1>
          <button onClick={toggleModal}> X</button>
        </C.ContentTitle>
        <C.ContainerModal>
          {feedbackMessage && (
            <C.FeedbackMessage>{feedbackMessage}</C.FeedbackMessage>
          )}
          <InputField
            label="Empresa"
            name="empresa"
            value={experiencias.empresa}
            onChange={handleChange}
            className="escolaridade"
          />
          <InputField
            label="Cargo"
            name="cargo"
            value={experiencias.cargo}
            onChange={handleChange}
            className="escolaridade"
          />
          <C.ContentInputCheck>
            <span>Trabalho Atual?</span>
            <div>
              <input
                type="checkbox"
                id="esta_atualmente"
                name="esta_atualmente"
                checked={experiencias.esta_atualmente}
                onChange={handleChange}
              />
              <label htmlFor="esta_atualmente">Sim</label>
            </div>
          </C.ContentInputCheck>
          <InputField
            label="Início"
            type="date"
            name="periodo_inicial"
            value={experiencias.periodo_inicial}
            onChange={handleChange}
            className="escolaridade"
          />
          {!experiencias.esta_atualmente && (
            <InputField
              label="Término"
              type="date"
              name="periodo_final"
              value={experiencias.periodo_final}
              onChange={handleChange}
              className="escolaridade"
            />
          )}
          {/* <InputField
            label="Atividades Profissional"
            name="atividades"
            value={experiencias.atividades.join(".")} 
            onChange={handleChange}
            className="escolaridade atividades-profissional"
          /> */}
          <C.ContentLabel htmlFor="textarea">Atividades</C.ContentLabel>
          <C.TextArea
            id="textarea"
            name="atividades"
            value={experiencias.atividades.join(".")} 
            onChange={handleChange}
            className="escolaridade atividades-profissional"
          />

          <C.ContentButtons>
            {experiencieList.length > 0 && (
              <button onClick={handlePatchExperiencies}>Salvar</button>
            )}
            <button onClick={handleRegister}>Adicionar Experiência</button>
          </C.ContentButtons>
        </C.ContainerModal>
      </C.ContentModal>
    </C.ModalBG>
  );
};

export { ModalExperiencia };
