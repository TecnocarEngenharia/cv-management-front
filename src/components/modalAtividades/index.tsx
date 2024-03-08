import { useState, useEffect } from "react";
import InputField from "../inputField";
import * as C from "./style";
import axios from "axios";
import { useParams } from "react-router-dom";

interface IModalProps {
  toggleModal: () => void;
}

interface Atividade {
  name: string;
}

const ModalAtividade = ({ toggleModal }: IModalProps) => {
  const { id } = useParams();
  const [atividadesList, setAtividadesList] = useState<Atividade[]>([]);
  const [atividade, setAtividade] = useState<Atividade>({ name: "" });
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}${id}`
        );
        const { data } = response;
        console.log(data);
        if (data && data.Atividades) {
          setAtividadesList(data.Atividades);
        }
      } catch (error) {
        console.error("Erro ao carregar atividades:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleInputChange = (fieldName: string, value: string) => {
    setAtividade({ ...atividade, [fieldName]: value });
  };

  const handlePatchAtividades = async () => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}${id}`, {
        Atividades: atividadesList,
      });
      setFeedbackMessage("Atividades salvas com sucesso!");

      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    } catch (error) {
      console.error("Erro ao enviar as atividades", error);
    }
  };

  const handleRegister = () => {
    if (atividade.name.trim() !== "") {
      const updatedAtividades = [...atividadesList, atividade];
      setAtividadesList(updatedAtividades);
      setAtividade({ name: "" });
      setFeedbackMessage("Atividade adicionada com sucesso");
    } else {
      setFeedbackMessage("Preencha o campo corretamente!");
    }

    setTimeout(() => {
      setFeedbackMessage("");
    }, 2000);
  };

  return (
    <C.ModalBG>
      <C.ContentModal>
        <C.ContainerModal>
          <C.ContentTitle>
            <h1>Adicionar Atividade</h1>
            <button onClick={toggleModal}>X</button>
          </C.ContentTitle>
          {feedbackMessage && (
            <C.FeedBackMessage>{feedbackMessage}</C.FeedBackMessage>
          )}
          <C.ContentInputs>
            <InputField
              label="Atividades extra-curriculares"
              placeholder="Adicione aqui sua atividade"
              value={atividade.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </C.ContentInputs>
          <C.ContentButtons>
            {atividadesList.length > 0 && (
              <button onClick={handlePatchAtividades}>
                Salvar todas as atividades
              </button>
            )}
            <button onClick={handleRegister}>Adicionar nova atividade</button>
          </C.ContentButtons>
        </C.ContainerModal>
      </C.ContentModal>
    </C.ModalBG>
  );
};

export { ModalAtividade };
