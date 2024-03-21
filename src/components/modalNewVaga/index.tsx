import React, { useState } from "react";
import axios from "axios";
import { camposSelect } from "../../utils/campoForms";
import * as C from "./style";
import InputSelect from "../inputSelect";

interface IModalProps {
  name?: string;
  vagas?: string | string[];
  onClose: () => void;
  id: number | undefined;
}

const ModalNewVaga: React.FC<IModalProps> = ({ onClose, name, vagas, id }) => {
  const [selectedVagas, setSelectedVagas] = useState<string[]>([]);
  const [newVaga, setNewVaga] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackMessageErr, setFeedbackMessageErr] = useState("");

  const handleVagas = () => {
    setNewVaga(!newVaga);
  };

  const handleSelectVaga = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedVagas((prevSelected) => [...prevSelected, selected]);
  };

  const handleCadastro = () => {
    const vagasExistentes = typeof vagas === "string" ? [vagas] : vagas || [];
    const vagasSelecionadas = [...vagasExistentes, ...selectedVagas];

    axios
      .patch(`http://localhost:8080/v1/candidate/${id}`, {
        tipo_desejado_linkedin: vagasSelecionadas,
      })
      .then(() => {
        setFeedbackMessage("Vagas cadastradas com sucesso!");
        setTimeout(() => setFeedbackMessage(""), 2000);
      })
      .catch((error) => {
        console.error("Erro ao atualizar os dados:", error);
        setFeedbackMessageErr(
          "Erro ao cadastrar vagas. Por favor, tente novamente."
        );
      });
  };

  return (
    <>
      <C.ModalBG>
        <C.ModalContent>
          <C.ContentTitle>
            <h1>Que bom ter você de volta</h1>
            <button onClick={onClose}>X</button>
          </C.ContentTitle>
          <C.Description>
            Olá <span>{name}</span>, vimos aqui no nosso sistema que você
            está cadastrado nessas vagas abaixo:
          </C.Description>

          <C.ContentForm>
            <C.ContentVagas>
              <h3>Vagas Cadastradas</h3>
              <C.List>
                {Array.isArray(vagas) && vagas.length > 0 ? (
                  vagas.map((vaga, index) => (
                    <C.ListItem key={index}>{vaga}</C.ListItem>
                  ))
                ) : (
                  <C.ListItem>{vagas}</C.ListItem>
                )}
              </C.List>
            </C.ContentVagas>
            <C.ContentNewVaga>
              <h3>Deseja cadastrar em outra vaga?</h3>
              <C.ContentButton>
                <button onClick={handleVagas}>Sim</button>
                <button className="Nao" onClick={onClose}>
                  Não
                </button>
              </C.ContentButton>
            </C.ContentNewVaga>
          </C.ContentForm>
        </C.ModalContent>
      </C.ModalBG>

      {newVaga && (
        <C.ModalBG>
          <C.ContentModalBG>
            <C.ContentTitle>
              <h3>Vagas disponíveis</h3>
            </C.ContentTitle>
            <C.FeedBackMessage className={feedbackMessage && "mt"}>
              {feedbackMessage && <p>{feedbackMessage}</p>}
            </C.FeedBackMessage>
            <C.FeedBackMessageErr className={feedbackMessageErr && "mt"}>
              {feedbackMessageErr && <p>{feedbackMessageErr}</p>}
            </C.FeedBackMessageErr>

            <InputSelect
              label="Vaga para candidatura"
              options={
                camposSelect.find(
                  (campo) => campo.field === "tipo_desejado_linkedin"
                )?.options || []
              }
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleSelectVaga(e)
              }
              className="vagasDisponiveis"
            />

            <C.ContentButtonTwo>
              <button onClick={handleCadastro}>Cadastrar</button>
              <button className="Nao" onClick={handleVagas}>
                Cancelar
              </button>
            </C.ContentButtonTwo>
          </C.ContentModalBG>
        </C.ModalBG>
      )}
    </>
  );
};

export { ModalNewVaga };
