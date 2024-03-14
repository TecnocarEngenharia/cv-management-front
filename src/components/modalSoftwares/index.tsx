import { useState } from "react";
import InputSelect from "../inputSelect";
import * as C from "./style";
import { Softwares } from "../../types/softwares.types";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface IModalProps {
  toggleModal: () => void;
}

const ModalSoftware = ({ toggleModal }: IModalProps) => {
  const { id } = useParams();
  const [softwaresList, setSoftwaresList] = useState<Softwares[]>([]);
  const [feedBack, setFeedBack] = useState("");
  const [software, setSoftware] = useState<Softwares>({
    software: "",
    nivel: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}${id}`
        );
        const { data } = response;
        if (data && data.software) {
          setSoftwaresList(data.software);
        }
      } catch (error) {
        console.error("Erro ao carregar software:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleInputChange = (fieldName: string, value: string) => {
    setSoftware({ ...software, [fieldName]: value });
  };

  const handleCadastro = () => {
    const updatedSoftwaresList = [...softwaresList, software];
    setSoftwaresList(updatedSoftwaresList);
    setFeedBack("Softwares adicionados com sucesso");

    setTimeout(() => setFeedBack(""), 2000);
    setSoftware({
      software: "",
      nivel: "",
    });
  };

  const handlePatchExperiencies = async () => {
    try {
      const softwareToUpdate = softwaresList.map((software) => ({
        ...software,
      }));
      await axios.patch(`${import.meta.env.VITE_API_URL}${id}`, {
        software: softwareToUpdate,
      });
      setFeedBack("Softwares salvos com sucesso");
      setTimeout(() => setFeedBack(""), 2000);
    } catch (error) {
      console.error("Error ao enviar os softwares", error);
    }
  };

  return (
    <C.ModalBG>
      <C.ContentModal>
        <C.ContentTitle>
          <h1>Adicionar Software</h1>
          <button onClick={toggleModal}> X</button>
        </C.ContentTitle>
        <C.ContainerModal>
          {feedBack && <C.FeedbackMessage>{feedBack}</C.FeedbackMessage>}
          <InputSelect
            label="Selecione o Software"
            options={[
              "",
              "Catia",
              "MS Project",
              "Nx",
              "Pacote Office",
              "PLM",
              "PowerBI",
              "SAP",
              "SolidWorks",
              "TCAE",
              "Excel",
            ]}
            className="software"
            value={software.software}
            onChange={(e) => handleInputChange("software", e.target.value)}
          />
          <InputSelect
            label="Selecione o nivel"
            options={["", "Básico", "Intermediario", "Avançado"]}
            className="software"
            value={software.nivel}
            onChange={(e) => handleInputChange("nivel", e.target.value)}
          />
          <C.ContentButtons>
            {softwaresList.length > 0 && (
              <button onClick={handlePatchExperiencies}>Salvar</button>
            )}
            <button onClick={handleCadastro}>Adicionar</button>
          </C.ContentButtons>
        </C.ContainerModal>
      </C.ContentModal>
    </C.ModalBG>
  );
};

export { ModalSoftware };
