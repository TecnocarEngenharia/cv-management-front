import { useState, useEffect } from "react";
import InputField from "../inputField";
import InputSelect from "../inputSelect";
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
    curso: "",
    nivel: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

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

  const handlePatchCursos = async () => {
    try {
      const cursosToUpdate = cursosList.map((curso) => ({
        ...curso,
      }));

      await axios.patch(`${import.meta.env.VITE_API_URL}${id}`, {
        cursos: cursosToUpdate,
      });
      setFeedbackMessage("Cursos salvas com sucesso!");

      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    } catch (error) {
      console.log("Error ao enviar as experiencias", error);
    }
  };

  const handleRegister = () => {
    if (cursos.curso && cursos.nivel) {
      const chave = cursos.curso + cursos.nivel;
      const updateCursoList = [
        ...cursosList,
        { chave, curso: cursos.curso, nivel: cursos.nivel },
      ];
      setCursosList(updateCursoList);
      setCursos({
        curso: "",
        nivel: "",
      });
      setFeedbackMessage("Cursos adicionados com sucesso");
      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    } else {
      setFeedbackMessage("Preencha todos os campos!");
      setTimeout(() => {
        setFeedbackMessage("");
      }, 2000);
    }
  };

  // const handleDeleteCurso = (chave: string) => {
  //   const updatedCursosList = cursosList.filter(
  //     (curso) => curso.chave !== chave
  //   );
  //   setCursosList(updatedCursosList);
  // };

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
            <InputSelect
              label="Nível"
              className="cursos"
              value={cursos.nivel}
              onChange={(e) => handleInputChange("nivel", e.target.value)}
              options={["", "Básico", "Intermediario", "Avançado"]}
            />
          </C.ContentInputs>
          <C.ContentButtons>
            {cursosList.length > 0 && (
              <button onClick={handlePatchCursos}>Salvar todos cursos</button>
            )}
            <button onClick={handleRegister}>Adicionar novos cursos</button>
          </C.ContentButtons>
          {/* <div>
            {cursosList.map((curso) => (
              <div key={curso.chave}>
                <p>
                  {curso.curso} - {curso.nivel}
                </p>
                <button onClick={() => handleDeleteCurso(curso.chave)}>
                  Excluir
                </button>
              </div>
            ))}
          </div> */}
        </C.ContainerModal>
      </C.ContentModal>
    </C.ModalBG>
  );
};

export { ModalCurso };
