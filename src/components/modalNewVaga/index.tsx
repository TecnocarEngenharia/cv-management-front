import { useEffect, useState } from "react";
import { camposSelect } from "../../utils/campoForms";

import * as C from "./style";
import InputSelect from "../inputSelect";

interface IModalProps {
  name?: string;
  vagas?: string | string[];
  onClose: () => void;
}

const ModalNewVaga = ({ onClose, name, vagas }: IModalProps) => {
  const [newVaga, setNewVaga] = useState(false);
  const [vagasArray, setVagasArray] = useState<string[]>([]);

  useEffect(() => {
    // Verifica se vagas é uma string e converte para array
    if (typeof vagas === "string") {
      setVagasArray(vagas.split(", "));
    } else {
      setVagasArray(vagas || []); // Se for um array, utiliza-o diretamente ou um array vazio se for undefined
    }
  }, [vagas]);

  console.log(vagas);

  const handleVagas = () => {
    setNewVaga(!newVaga);
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
            Olá <span> {name} </span>, vimos aqui no nosso sistemas que você
            esta cadastrado nessas vagas abaixo:
          </C.Description>

          <C.ContentForm>
            <C.ContentVagas>
              <h3>Vagas Cadastradas</h3>
              <C.List>
                <C.ListItem>Item 1</C.ListItem>
                {vagasArray.map((vaga, index) => (
                  <C.ListItem key={index}>{vaga}</C.ListItem>
                ))}
              </C.List>
            </C.ContentVagas>
            <C.ContentNewVaga>
              <h3>Deseja Cadastrar em outra vaga?</h3>
              <C.ContentButton>
                <button onClick={handleVagas}> Sim</button>
                <button className="Nao"> Não</button>
              </C.ContentButton>
            </C.ContentNewVaga>
          </C.ContentForm>
        </C.ModalContent>
      </C.ModalBG>

      {newVaga && (
        <C.ModalBG>
          <C.ContentModalBG>
            <C.ContentTitle>
              <h3> Vagas disponiveis</h3>
            </C.ContentTitle>
            <InputSelect
              label="Vaga para candidatura"
              options={
                camposSelect.find(
                  (campo) => campo.field === "tipo_desejado_linkedin"
                )?.options || []
              }
              className="vagasDisponiveis"
            />

            <C.ContentButtonTwo>
              <button> Cadastrar</button>
              <button className="Nao" onClick={handleVagas}>
                {" "}
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
