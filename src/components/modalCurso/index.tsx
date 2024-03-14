import { useState, useEffect } from "react";
import InputField from "../inputField";
import * as C from "./style";
import { Cursos } from "../../types/cursos.types";
import { useParams } from "react-router-dom";
import axios from "axios";

interface IModalProps {
  toggleModal: () => void;
}

const ModalCurso = ({ toggleModal }: IModalProps) => {
  const { id } = useParams();
  const [cursosList, setCursosList] = useState<
    { chave: string; curso: string; nivel: string }[]
  >([]);
  const [cursos, setCursos] = useState<Cursos>({
    chave: "",
    curso: "",
    nivel: "Avançado",
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
        if (data && data.cursos) {
          const cursosWithKey = data.cursos.map(
            (curso: { curso: string; nivel: string }) => ({
              chave: curso.curso + curso.nivel,
              curso: curso.curso,
              nivel: curso.nivel,
            })
          );
          setCursosList(cursosWithKey);
        }
      } catch (error) {
        console.error("Erro ao carregar experiencias:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleInputChange = (fieldName: string, value: string) => {
    setCursos({ ...cursos, [fieldName]: value });
  };

  const handleRegister = async () => {
    if (cursos.curso) {
      if (editIndex === -1) {
        const chave = cursos.curso + cursos.nivel;
        const updateCursoList = [
          ...cursosList,
          { chave, curso: cursos.curso, nivel: cursos.nivel },
        ];
        setCursosList(updateCursoList);
        setCursos({
          chave: "",
          curso: "",
          nivel: "Avançado",
        });
        setFeedbackMessage("Cursos adicionados com sucesso");
        setTimeout(() => {
          setFeedbackMessage("");
        }, 2000);
      } else {
        const updatedCurso = [...cursosList];
        updatedCurso[editIndex] = cursos;
        setCursosList(updatedCurso);
        setFeedbackMessage("Curso atualizado com sucesso");
        setEditIndex(-1);
        await handlePatchCursos(updatedCurso);
      }
      setCursos({
        chave: "",
        curso: "",
        nivel: "",
      });
    } else {
      setFeedbackMessage("Preencha todos os campos!");
      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    }
  };

  const handlePatchCursos = async (updatedCurso: Cursos[]) => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}${id}`, {
        cursos: updatedCurso,
      });
      setFeedbackMessage("Cursos salvas com sucesso!");

      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    } catch (error) {
      console.error("Error ao enviar as experiencias", error);
    }
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    const cursoToEdit = cursosList[index];

    setCursos({ ...cursoToEdit });
    setIsShow(false);
  };

  return (
    <C.ModalBG>
      <C.ContentModal>
        <C.ContainerModal>
          <C.ContentTitle>
            <h1>Adicionar Curso</h1>
            <button onClick={toggleModal}>X</button>
          </C.ContentTitle>
          {feedbackMessage && (
            <C.FeedBackMessage>{feedbackMessage}</C.FeedBackMessage>
          )}
          <C.ContentInputs>
            <InputField
              label="Curso"
              placeholder="Adicione aqui seu curso"
              value={cursos.curso}
              onChange={(e) => handleInputChange("curso", e.target.value)}
            />
          </C.ContentInputs>
          <C.ContentButtons>
            {cursosList.length > 0 && (
              <button onClick={() => setIsShow(true)}> Editar Cursos</button>
            )}
            {editIndex === -1 && (
              <button onClick={() => handlePatchCursos(cursosList)}>
                Salvar Cursos
              </button>
            )}
            <button onClick={handleRegister}>
              {editIndex === -1 ? "Adicionar" : "Salvar Edição"}
            </button>
          </C.ContentButtons>
        </C.ContainerModal>
      </C.ContentModal>
      {isShow && (
        <C.ModalBG>
          <C.ModalEditStyle>
            <C.ContentModalTitle>
              <h3>Cursos</h3>
              <button onClick={() => setIsShow(false)}> X</button>
            </C.ContentModalTitle>
            {cursosList.map((curso, index) => (
              <C.ContentModalStyled key={index}>
                <p>{index}</p>
                <p>{curso.curso}</p>
                <button onClick={() => handleEdit(index)}>Editar</button>
              </C.ContentModalStyled>
            ))}
          </C.ModalEditStyle>
        </C.ModalBG>
      )}
    </C.ModalBG>
  );
};

export { ModalCurso };
