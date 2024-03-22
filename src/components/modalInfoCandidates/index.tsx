import { useState, useEffect } from "react";
import InputField from "../inputField";
import * as M from "./style";
import { useAxiosCandidate } from "../../hooks/requestAxios";
import { Candidate } from "../../types/candidate.types";
import { initialState } from "../../utils/initialState";
import { formatarDataPTModal } from "../../functions/formatarDate";
import { ModalResumo } from "../modalResumo";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ModalConfirmação } from "../modalConfirmação";
import InputSelect from "../inputSelect";

interface IModalProps {
  id?: number | undefined;
  toggleModal: () => void;
}

const ModalInfoCandidate = ({ id, toggleModal }: IModalProps) => {
  const url = `${import.meta.env.VITE_API_URL}${id}`;
  const { data, patchConfig } = useAxiosCandidate(url);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState<Candidate>(initialState);
  const [resumo, setResumo] = useState(false);
  const [deleteCandidate, setDeleteCandidate] = useState(false);
  const [view, setView] = useState(0);
  const navigate = useNavigate();
  const [editedStatus, setEditedStatus] = useState<string>(data?.status || "");

  useEffect(() => {
    if (data) {
      setEditedData(data);
    }
  }, [data]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleClose = () => {
    setResumo(!resumo);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEditedStatus(e.target.value);
  };

  const handleDelete = () => {
    setDeleteCandidate(!deleteCandidate);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      editedData.updatedAt = new Date();
      editedData.status = editedStatus;
      await patchConfig(editedData);
      setEditMode(false);
    } catch (error) {
      console.error("Erro ao salvar alterações:", error);
    }
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
    } catch (error) {
      console.error("Erro ao avaliar candidato:", error);
    }
  };

  return (
    <>
      <M.ModalBG>
        <M.Container>
          <M.Header>
            <M.Name>{data?.profissional}</M.Name>
            <M.Linha />
            <M.ContentInfo>
              <p>
                Idade: <span>{data?.idade} anos</span>
              </p>
              <p>
                Registrado desde:{" "}
                <span>{formatarDataPTModal(data?.createdAt)}</span>
              </p>
              <p>
                Ultima atualização:{" "}
                <span>{formatarDataPTModal(data?.updatedAt)}</span>
              </p>
            </M.ContentInfo>
            <M.Linha />
            <M.ContainerButtons>
              <div>
                <button onClick={() => navigate(`/curriculum/${id}`)}>
                  Formar CV
                </button>
                <button onClick={handleDelete}>Excluir</button>
              </div>
              <div>
                <button onClick={handleCV}>Baixar CV</button>
                <button onClick={toggleModal}>Fechar</button>
              </div>
            </M.ContainerButtons>
          </M.Header>
          <M.NavBar>
            <p onClick={() => setView(0)} className={view === 0 ? "check" : ""}>
              Informações Pessoais
            </p>
            <p onClick={() => setView(1)} className={view === 1 ? "check" : ""}>
              Conhecimentos em idiomas
            </p>
            <p onClick={() => setView(2)} className={view === 2 ? "check" : ""}>
              Informações Profissionais
            </p>
            <p onClick={() => setView(3)} className={view === 3 ? "check" : ""}>
              Sobre a Vaga
            </p>
            <p onClick={() => setView(4)} className={view === 4 ? "check" : ""}>
              Observações
            </p>
          </M.NavBar>
          {view === 0 && (
            <M.ContentViewOne>
              <M.ContentFirstInputs>
                <InputField
                  label="Profissional"
                  className={editMode ? "infoPessoaisEdit" : "infoPessoais"}
                  disabled={!editMode}
                  value={editedData.profissional || ""}
                  onChange={handleInputChange}
                  name="profissional"
                />
                <InputField
                  label="CPF"
                  className={editMode ? "infoPessoaisEdit" : "infoPessoais"}
                  disabled={!editMode}
                  value={editedData.cpf || ""}
                  onChange={handleInputChange}
                  name="cpf"
                />
                <InputField
                  label="E-mail"
                  className={editMode ? "infoPessoaisEdit" : "infoPessoais"}
                  disabled={!editMode}
                  value={editedData.email || ""}
                  onChange={handleInputChange}
                  name="email"
                />
              </M.ContentFirstInputs>
              <M.ContentSecondInputs>
                <InputField
                  label="Genero"
                  className={editMode ? "infoPessoaisEdit" : "infoPessoais"}
                  disabled={!editMode}
                  value={editedData.genero || ""}
                  onChange={handleInputChange}
                  name="genero"
                />
                <InputField
                  label="Idade"
                  className={editMode ? "infoPessoaisEdit" : "infoPessoais"}
                  disabled={!editMode}
                  value={`${editedData.idade || ""} anos`}
                  onChange={handleInputChange}
                  name="idade"
                />
                <InputField
                  label="Telefone"
                  className={editMode ? "infoPessoaisEdit" : "infoPessoais"}
                  disabled={!editMode}
                  value={editedData.telefone || ""}
                  onChange={handleInputChange}
                  name="telefone"
                />
                <InputField
                  label="Cidade"
                  className={editMode ? "infoPessoaisEdit" : "infoPessoais"}
                  disabled={!editMode}
                  value={editedData.cidade || ""}
                  onChange={handleInputChange}
                  name="cidade"
                />
                <InputField
                  label="UF"
                  className={editMode ? "infoPessoaisEdit" : "infoPessoais"}
                  disabled={!editMode}
                  value={editedData.uf || ""}
                  onChange={handleInputChange}
                  name="uf"
                />
              </M.ContentSecondInputs>
              <M.ContentThreeInputs>
                <InputField
                  label="Formação"
                  className={editMode ? "infoPessoaisEdit" : "infoPessoais"}
                  disabled={!editMode}
                  value={editedData.formacao || ""}
                  onChange={handleInputChange}
                  name="formacao"
                />
                <M.ContentTeste>
                  <InputSelect
                    label="Status Candidato"
                    className={
                      editMode
                        ? "infoPessoaisEdit ModalInfo"
                        : "infoPessoais ModalInfo"
                    }
                    disabled={!editMode}
                    value={editMode ? editedStatus : data?.status || ""}
                    options={[
                      "",
                      "Disponível",
                      "Sem interesse",
                      "Concorrência",
                      "Em entrevista",
                      "Teste técnico",
                      "Fora do Perfil",
                      "Contratado",
                    ]}
                    onChange={handleStatusChange}
                  />
                </M.ContentTeste>
              </M.ContentThreeInputs>
            </M.ContentViewOne>
          )}
          {view === 1 && (
            <M.ContentTwoView>
              <M.ContentTwoViewContainer>
                <InputField
                  label="Conhecimentos em inglês"
                  value={editedData.conhecimento_ingles || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="conhecimento_ingles"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
                <InputField
                  label="Conhecimento em Francês"
                  value={editedData.conhecimento_frances || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="conhecimento_frances"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
              </M.ContentTwoViewContainer>
              <M.ContentTwoViewContainerThree>
                <InputField
                  label="Conhecimento em Italiano"
                  value={editedData.conhecimento_italiano || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="conhecimento_italiano"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
                <InputField
                  label="Conhecimento em Espanhol"
                  value={editedData.conhecimento_espanhol || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="conhecimento_espanhol"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
              </M.ContentTwoViewContainerThree>
            </M.ContentTwoView>
          )}
          {view === 2 && (
            <M.ContentThreeView>
              <M.ContentThreeViewContainer>
                <InputField
                  label="Pretensão Salarial CLT"
                  value={editedData.pretensao_salarial || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="pretensao_salarial"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
                <InputField
                  label="Pretensão PJ"
                  value={editedData.pretensao_pj || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="pretensao_pj"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
                <InputField
                  label="Esta Empregado"
                  value={editedData.esta_empregado || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="esta_empregado"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
                <InputField
                  label="Empresa Atual"
                  value={editedData.empresa_atual || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="empresa_atual"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
              </M.ContentThreeViewContainer>
              <M.ContentThreeViewContainerThree>
                <InputField
                  label="CNPJ"
                  value={editedData.cnpj || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="cnpj"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
                {editedData.cnpj === "Sim" && (
                  <InputField
                    label="Tipo CNPJ"
                    value={editedData.tipo_cnpj || ""}
                    disabled={!editMode}
                    onChange={handleInputChange}
                    name="tipo_cnpj"
                    className={
                      editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                    }
                  />
                )}
                <InputField
                  label="Modalidade Atual"
                  value={editedData.modalidade_atual || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="modalidade_atual"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
                <InputField
                  label="Experiência no Ramo Automotivo"
                  value={editedData.experiencia_ramo_automotivo || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="experiencia_ramo_automotivo"
                  className={
                    editMode
                      ? "infoPessoaisEdit"
                      : "infoPessoais infoTwo ramoAutomotivo"
                  }
                />
              </M.ContentThreeViewContainerThree>
            </M.ContentThreeView>
          )}
          {view === 3 && (
            <M.ContentFourView>
              <M.ContentFourViewTwo>
                <InputField
                  label="Vaga Porto Real / RJ"
                  value={editedData.vaga_100_presencial_porto_real_rj || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="vaga_100_presencial_porto_real_rj"
                  className={
                    editMode
                      ? "infoPessoaisEdit alwaysActive"
                      : "infoPessoais infoTwo alwaysActive"
                  }
                />
                <InputField
                  label="Vaga Goiana / PE"
                  value={editedData.vaga_100_presencial_goiana_pe || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="vaga_100_presencial_goiana_pe"
                  className={
                    editMode
                      ? "infoPessoaisEdit alwaysActive"
                      : "infoPessoais infoTwo alwaysActive"
                  }
                />
                <InputField
                  label="Vaga Betim / MG"
                  value={editedData.vaga_100_presencial_betim_mg || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="vaga_100_presencial_betim_mg"
                  className={
                    editMode
                      ? "infoPessoaisEdit alwaysActive"
                      : "infoPessoais infoTwo alwaysActive"
                  }
                />
                <InputField
                  label="Vaga São Paulo / SP"
                  value={editedData.vaga_100_presencial_sao_paulo || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="vaga_100_presencial_sao_paulo"
                  className={
                    editMode
                      ? "infoPessoaisEdit alwaysActive"
                      : "infoPessoais infoTwo alwaysActive"
                  }
                />
              </M.ContentFourViewTwo>
              <M.ContentFourViewFour>
                <InputField
                  label="Vaga Internacional"
                  value={editedData.vaga_internacional || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="vaga_internacional"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
                <InputField
                  label="Home Office"
                  value={editedData.home_office || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="home_office"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
                <InputField
                  label="Vaga desejada"
                  value={
                    Array.isArray(editedData.tipo_desejado_linkedin)
                      ? editedData.tipo_desejado_linkedin.join(", ")
                      : editedData.tipo_desejado_linkedin || ""
                  }
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="tipo_desejado_linkedin"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
              </M.ContentFourViewFour>
              <M.ContentFourViewFour>
                <InputField
                  label="Interesse Imediato a Vaga"
                  value={editedData.interesse_imediato || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="interesse_imediato"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
                <InputField
                  label="Entrevista Online"
                  value={editedData.entrevista_online || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="entrevista_online"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
                <InputField
                  label="Teste Técnico"
                  value={editedData.teste_tecnico || ""}
                  disabled={!editMode}
                  onChange={handleInputChange}
                  name="teste_tecnico"
                  className={
                    editMode ? "infoPessoaisEdit" : "infoPessoais infoTwo"
                  }
                />
              </M.ContentFourViewFour>
            </M.ContentFourView>
          )}
          {view === 4 && (
            <M.ContentFiveView>
              <M.ContentFiveViewTwo>
                <M.ContentInfoFive>
                  <p>
                    O profissional {editedData.profissional} está cadastrado nas
                    seguintes vagas:
                  </p>
                  {Array.isArray(editedData.tipo_desejado_linkedin) ? (
                    editedData.tipo_desejado_linkedin.map((item, index) => {
                      return (
                        <M.List key={index}>
                          <M.ListItem> - {item}</M.ListItem>
                        </M.List>
                      );
                    })
                  ) : (
                    <M.List>
                      <M.ListItem>
                        {" "}
                        - {editedData.tipo_desejado_linkedin}
                      </M.ListItem>
                    </M.List>
                  )}
                </M.ContentInfoFive>
              </M.ContentFiveViewTwo>
              <M.ContentFiveViewThree></M.ContentFiveViewThree>
            </M.ContentFiveView>
          )}
          <M.Footeer>
            {editMode ? (
              <button onClick={handleSaveChanges}>Salvar</button>
            ) : (
              <button onClick={toggleEditMode}>Editar Dados</button>
            )}
            {data?.foi_avaliado_recrutamento === false && (
              <button onClick={avaliarCandidato}>Avaliar</button>
            )}
          </M.Footeer>
        </M.Container>
      </M.ModalBG>
      {resumo && (
        <ModalResumo
          text={editedData.resumoProfissional}
          onclose={handleClose}
        />
      )}
      {deleteCandidate && (
        <ModalConfirmação closeModal={handleDelete} id={id} />
      )}
    </>
  );
};

export { ModalInfoCandidate };
