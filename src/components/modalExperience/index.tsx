import { useState, ChangeEvent, useEffect } from "react";
import InputField from "../inputField";
import * as C from "./style";
import axios from "axios";
import { useParams } from "react-router-dom";
import Icon_Edit from "../../image/Icon_Edit.svg";

interface Experiencia {
  empresa: string;
  cargo: string;
  esta_atualmente: boolean;
  periodo_inicial: string;
  periodo_final: string;
  atividades: string[];
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
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [isBlock, setIsBlock] = useState(false);

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
      [name]: name === "atividades" ? value.split(".") : newValue,
    }));
  };

  const handleSaveEdit = async () => {
    if (
      experiencias.empresa &&
      experiencias.cargo &&
      experiencias.periodo_inicial &&
      experiencias.atividades.length > 0
    ) {
      try {
        const updatedExperiencieList: Experiencia[] = [...experiencieList];
        updatedExperiencieList[editIndex] = experiencias;
        await axios.patch(`${import.meta.env.VITE_API_URL}${id}`, {
          experiencias: updatedExperiencieList,
        });
        setExperiencieList(updatedExperiencieList);
        setFeedbackMessage("Experiência atualizada com sucesso!");
        setExperiencias({
          empresa: "",
          cargo: "",
          esta_atualmente: false,
          periodo_inicial: "",
          periodo_final: "",
          atividades: [],
        });
        setEditIndex(-1);
        setTimeout(() => {
          setFeedbackMessage("");
        }, 2000);
      } catch (error) {
        console.error("Erro ao atualizar experiência:", error);
      }
    } else {
      setFeedbackMessage("Por favor, preencha todos os campos.");
      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    }
  };

  const handleRegister = () => {
    if (
      experiencias.empresa &&
      experiencias.cargo &&
      experiencias.periodo_inicial &&
      experiencias.atividades.length > 0
    ) {
      if (editIndex !== -1) {
        handleSaveEdit();
      } else {
        const updatedExperiencieList = [...experiencieList, experiencias];
        setExperiencieList(updatedExperiencieList);
        setFeedbackMessage("Experiência adicionada com sucesso!");
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
      }
    } else {
      setFeedbackMessage("Por favor, preencha todos os campos.");
      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    }
  };
  const saveExperiencieList = async (updatedExperiencieList: Experiencia[]) => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}${id}`, {
        experiencias: updatedExperiencieList,
      });
      setExperiencieList(updatedExperiencieList);
      setFeedbackMessage("Lista de experiências salva com sucesso!");
      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    } catch (error) {
      console.error("Erro ao atualizar lista de experiências:", error);
    }
  };

  const handleEdit = (index: number) => {
    setExperiencias(experiencieList[index]);
    setEditIndex(index);
    setIsBlock(false);
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
              <button onClick={() => setIsBlock(true)}>
                Editar Experiencias
              </button>
            )}

            <button onClick={() => saveExperiencieList(experiencieList)}>
              Salvar
            </button>

            <button onClick={handleRegister}>
              {editIndex === -1 ? "Adicionar Experiência" : "Salvar Edição"}
            </button>
          </C.ContentButtons>
        </C.ContainerModal>
        {isBlock ? (
          <C.ModalBG>
            <C.ModalEditStyle>
              <C.ContentModalTitle>
                <h3>Experiencias</h3>
                <button onClick={() => setIsBlock(false)}> X</button>
              </C.ContentModalTitle>
              {experiencieList.length > 0 ? (
                experiencieList.map((experiencia, index) => (
                  <C.ContentModalStyled key={index}>
                    <p>{index}</p>
                    <p>{experiencia.empresa}</p>
                    <p>{experiencia.cargo}</p>
                    <img
                      src={Icon_Edit}
                      alt="Editar"
                      onClick={() => handleEdit(index)}
                    />
                  </C.ContentModalStyled>
                ))
              ) : (
                <p>Carregando...</p>
              )}
            </C.ModalEditStyle>
          </C.ModalBG>
        ) : null}
      </C.ContentModal>
    </C.ModalBG>
  );
};

export { ModalExperiencia };
