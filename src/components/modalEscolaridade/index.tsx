import InputField from "../inputField";
import InputSelect from "../inputSelect";
import { useState, useEffect } from "react";
import * as C from "./style";
import { Formations } from "../../types/formations.types";
import { useParams } from "react-router-dom";
import axios from "axios";
import Icon_Edit from "../../image/Icon_Edit.svg";

interface IModalProps {
  toggleModal: () => void;
}

const ModalEscolaridade = ({ toggleModal }: IModalProps) => {
  const { id } = useParams();
  const [formationsList, setFormationsList] = useState<Formations[]>([]);
  const [formations, setFormations] = useState<Formations>({
    escolaridade: "",
    status: "",
    instituicao: "",
    inicio: "",
    termino_previsao: "",
    curso: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}${id}`
        );
        const { data } = response;
        if (data && data.formacoes) {
          setFormationsList(data.formacoes);
        }
      } catch (error) {
        console.error("Erro ao carregar formações:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (fieldName: string, value: string) => {
    setFormations({ ...formations, [fieldName]: value });
  };

  const handleCadastro = async () => {
    if (
      formations.escolaridade &&
      formations.status &&
      formations.instituicao &&
      formations.inicio &&
      formations.termino_previsao &&
      formations.curso
    ) {
      if (editIndex === -1) {
        const updatedFormationsList = [...formationsList, formations];
        setFormationsList(updatedFormationsList);
        setFeedbackMessage("Formação adicionada com sucesso!");
      } else {
        const updatedFormationsList = [...formationsList];
        updatedFormationsList[editIndex] = formations;
        setFormationsList(updatedFormationsList);
        setFeedbackMessage("Formação atualizada com sucesso!");
        setEditIndex(-1);
        await handlePatchFormations(updatedFormationsList);
      }
      setFormations({
        escolaridade: "",
        status: "",
        instituicao: "",
        inicio: "",
        termino_previsao: "",
        curso: "",
      });
      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    } else {
      setFeedbackMessage("Por favor, preencha todos os campos obrigatórios.");
      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    }
  };

  const handlePatchFormations = async (updatedFormationsList: Formations[]) => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}${id}`, {
        formacoes: updatedFormationsList,
      });
      setFeedbackMessage("Formações atualizadas com sucesso!");
      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    } catch (error) {
      console.error("Erro ao atualizar formações:", error);
    }
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    const formationToEdit = formationsList[index];
    setFormations({
      ...formationToEdit,
      inicio: formationToEdit.inicio.split("T")[0],
      termino_previsao: formationToEdit.termino_previsao.split("T")[0],
    });
    setIsShow(false);
  };

  return (
    <C.ModalBG>
      <C.ContentModal>
        <C.ContentTitle>
          <h1>{editIndex === -1 ? "Adicionar" : "Editar"} Escolaridade</h1>
          <button onClick={toggleModal}> X</button>
        </C.ContentTitle>
        <C.ContentMessage>
          {feedbackMessage && <p>{feedbackMessage}</p>}
        </C.ContentMessage>
        <C.ContentInputs>
          <InputSelect
            label="Selecione a escolaridade"
            className="escolaridade"
            options={[
              "",
              "Ensino Técnico",
              "Ensino Superior",
              "Especialização",
              "Mestrado",
              "Doutorado",
            ]}
            onChange={(e) => handleInputChange("escolaridade", e.target.value)}
            value={formations.escolaridade}
          />
          <InputField
            label="Instituição"
            className="escolaridade"
            onChange={(e) => handleInputChange("instituicao", e.target.value)}
            value={formations.instituicao}
          />
          <InputField
            label="Curso"
            className="escolaridade"
            onChange={(e) => handleInputChange("curso", e.target.value)}
            value={formations.curso}
          />
          <C.ContentDate>
            <InputField
              label="Início"
              className="escolaridade"
              type="date"
              onChange={(e) => handleInputChange("inicio", e.target.value)}
              value={formations.inicio}
            />
            <InputField
              label="Término/Previsão"
              className="escolaridade"
              type="date"
              onChange={(e) =>
                handleInputChange("termino_previsao", e.target.value)
              }
              value={formations.termino_previsao}
            />
          </C.ContentDate>
          <InputSelect
            label="Status"
            className="escolaridade"
            onChange={(e) => handleInputChange("status", e.target.value)}
            value={formations.status}
            options={["", "Concluída", "Em Andamento", "Trancada"]}
          />
        </C.ContentInputs>
        <C.ContentButtons>
          {formationsList.length > 0 && (
            <button onClick={() => setIsShow(true)}>Editar Escolaridade</button>
          )}
          <button onClick={() => handlePatchFormations(formationsList)}>
            Salvar
          </button>
          <button onClick={handleCadastro}>
            {editIndex === -1 ? "Adicionar" : "Salvar Edição"}
          </button>
        </C.ContentButtons>
      </C.ContentModal>
      {isShow && (
        <C.ModalBG>
          <C.ModalEditStyle>
            <C.ContentModalTitle>
              <h3>Escolaridade</h3>
              <button onClick={() => setIsShow(false)}> X</button>
            </C.ContentModalTitle>
            {formationsList.map((formation, index) => (
              <C.ContentModalStyled key={index}>
                <p>{index}</p>
                <p>{formation.curso}</p>
                <img
                  src={Icon_Edit}
                  alt="Editar"
                  onClick={() => handleEdit(index)}
                />
              </C.ContentModalStyled>
            ))}
          </C.ModalEditStyle>
        </C.ModalBG>
      )}
    </C.ModalBG>
  );
};

export { ModalEscolaridade };
