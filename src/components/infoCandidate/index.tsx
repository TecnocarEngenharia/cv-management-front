import { useNavigate } from "react-router-dom";
import * as C from "./style";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import { useState, useEffect } from "react";
import { initialState } from "../../utils/initialState";
import { format } from "date-fns";
import Loading from "../loading";
import { formatCPF, formatPhoneNumber } from "../../utils/regex";
import {
  Fields,
  renderInfoDetails,
  renderInfoSections,
} from "../../utils/camposEdit";
import { Candidate } from "../../types/candidate.types";
import axios from "axios";

interface IModalProps {
  id?: number;
  toggleModal: () => void;
}

const InfoCandidate = ({ id, toggleModal }: IModalProps) => {
  const url = `${import.meta.env.VITE_API_URL}${id}`;
  const { data, patchConfig } = useAxiosCandidate(url);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editedData, setEditedData] = useState<Candidate>(initialState);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setEditedData((prevData) => ({
        ...prevData,
        ...data,
      }));
    }
  }, [data]);

  const toggleEditForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  const avaliarCandidato = async () => {
    try {
      setEditedData((prevData) => ({
        ...prevData,
        foi_avaliado_recrutamento: true,
      }));
      await patchConfig({
        ...editedData,
        foi_avaliado_recrutamento: true,
      });
      setMessage("Candidato avaliado com sucesso!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Erro ao avaliar candidato:", error);
    }
  };

  const deletarCandidato = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}${id}`);
      setMessage("Candidato excluido com sucesso!");
      toggleModal();
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Erro ao excluir candidato:", error);
    }
  };

  const handleInputChange = (field: keyof Candidate, value: string): void => {
    setEditedData({
      ...editedData,
      [field]: value,
    });
  };

  const handleChangeTelefone = (e: { target: { value: string } }) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setEditedData({ ...editedData, telefone: formattedPhoneNumber });
  };

  const handleChangeCPF = (e: { target: { value: string } }) => {
    const formattedCPF = formatCPF(e.target.value);
    setEditedData({ ...editedData, cpf: formattedCPF });
  };

  const handleSave = async () => {
    try {
      editedData.updatedAt = new Date();
      patchConfig(editedData);
      setMessage("Candidato editado com sucesso!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      toggleEditForm();
    } catch (error) {}
  };

  const handleCV = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}${id}/download-cv`,
        {
          responseType: "blob",
        }
      );
      const blob = new Blob([response.data]);
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `Tecnocar - ${data?.profissional} - ${data?.codigoCandidate}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erro durante o download do currículo:", error);
    }
  };
  
  return (
    <C.ModalBG>
      <C.Container>
        <C.ContentTitle>
          {!message ? (
            <C.Title className={!message ? "InfoCandidate" : ""}></C.Title>
          ) : (
            <C.Title>{message}</C.Title>
          )}
          <C.ContantButtons>
            <div>
              <button onClick={handleCV}>Baixar CV </button>
              <button onClick={() => navigate(`/curriculum/${id}`)}>
                Formar CV
              </button>

              {data?.foi_avaliado_recrutamento === false && (
                <button onClick={avaliarCandidato}>Avaliar</button>
              )}
            </div>
            <div>
              <button onClick={showProjectForm ? handleSave : toggleEditForm}>
                {showProjectForm ? "Salvar Dados" : "Editar Dados"}
              </button>
              <button onClick={deletarCandidato}>Excluir</button>
              <button onClick={toggleModal}>Fechar</button>
            </div>
          </C.ContantButtons>
        </C.ContentTitle>

        <C.ContainerTwo>
          <C.ContainerGeneral>
            {data?.profissional ? (
              <div>
                {!showProjectForm ? (
                  <>
                    {renderInfoSections.map((section, index) => (
                      <C.Section key={index}>
                        <C.SectionTitle>{section.title}</C.SectionTitle>
                        <C.Content>
                          {section.keys.map((key) => {
                            const detail = renderInfoDetails.find(
                              (item) => item.name === key
                            );
                            if (!detail) return null;
                            return (
                              <C.DadosInfo key={detail.key}>
                                <C.InfoName>{detail.name}</C.InfoName>
                                <C.InfoValue>
                                  {detail.format
                                    ? format(
                                        new Date(data[detail.key]),
                                        detail.format
                                      )
                                    : data[detail.key]}
                                </C.InfoValue>
                              </C.DadosInfo>
                            );
                          })}
                        </C.Content>
                      </C.Section>
                    ))}
                  </>
                ) : (
                  <div>
                    {Fields.map((section) => (
                      <div key={section.title}>
                        <C.SectionTitle>{section.title}</C.SectionTitle>
                        <C.Content>
                          {section.fields.map((field) => {
                            const detail = renderInfoDetails.find(
                              (item) => item.key === field
                            );
                            if (!detail) return null;

                            return (
                              <C.DadosInfo key={detail.key}>
                                <C.InfoName>{detail.name}</C.InfoName>
                                {field === "telefone" ? (
                                  <C.EditableInput
                                    type="text"
                                    value={editedData[field] || ""}
                                    onChange={handleChangeTelefone}
                                    className="InfoValue Editable"
                                  />
                                ) : field === "cpf" ? (
                                  <C.EditableInput
                                    type="text"
                                    value={editedData[field] || ""}
                                    onChange={handleChangeCPF}
                                    disabled
                                    className="InfoValue Editable"
                                  />
                                ) : (
                                  <C.EditableInput
                                    type="text"
                                    value={editedData[field] || ""}
                                    onChange={(e) =>
                                      handleInputChange(field, e.target.value)
                                    }
                                    className="InfoValue Editable"
                                  />
                                )}
                              </C.DadosInfo>
                            );
                          })}
                        </C.Content>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Loading />
            )}
          </C.ContainerGeneral>
        </C.ContainerTwo>
      </C.Container>
    </C.ModalBG>
  );
};

export { InfoCandidate };
