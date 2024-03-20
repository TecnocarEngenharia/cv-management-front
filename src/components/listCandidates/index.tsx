import React, { useState } from "react";
import * as C from "./style";
import Loading from "../loading"; 
import { ModalInfoCandidate } from "../modalInfoCandidates";

interface Candidate {
  id: number;
  profissional: string;
  idade: number;
  email: string;
  telefone: string;
  cidade: string;
  uf: string;
  esta_empregado: string;
  pretensao_salarial: string;
  pretensao_pj?: string;
  tipo_desejado_linkedin: string;
  nivel_funcao: string;
  conhecimento_ingles?: string;
}

interface ListCandidatesProps {
  currentData?: Candidate[] | null;
  totalPages?: number;
  currentPage?: number;
  handlePageChange?: (newPage: number) => void;
  onCloseModal: any;
}

const ListCandidates: React.FC<ListCandidatesProps> = ({
  currentData,
  onCloseModal 
}) => {
  const formatMoney = (amount: string) => {
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) return "";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(numericAmount);
  };
  const [modal, setModal] = useState(false);
  const [userID, setUserID] = useState<number | undefined>();

  const openModal = (id: number) => {
    setUserID(id);
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
    onCloseModal();
  };

  const getInitials = (phrase: string) => {
    const words = phrase.split(' ');
    const initials = words.map(word => word[0].toUpperCase()).join('.');
    return initials;
  };

  return (
    <>
      <C.TableContainer>
        {currentData && currentData.length > 0 ? (
          <>
            <C.StyledTable>
              <thead>
                <tr>
                  <C.TableHeaderSpecial className="profissional">Profissional</C.TableHeaderSpecial>
                  <C.TableHeaderSpecial>Idade</C.TableHeaderSpecial>
                  <C.TableHeaderSpecial>Telefone</C.TableHeaderSpecial>
                  <C.TableHeaderSpecial>Cidade</C.TableHeaderSpecial>
                  <C.TableHeaderSpecial className="UF">UF</C.TableHeaderSpecial>
                  <C.TableHeaderSpecial>Pretensão CLT</C.TableHeaderSpecial>
                  <C.TableHeaderSpecial>Pretensão PJ</C.TableHeaderSpecial>
                  <C.TableHeaderSpecial className="vaga">Vaga Cadastrada</C.TableHeaderSpecial>
                  <C.TableHeaderSpecial>Nivel</C.TableHeaderSpecial>
                  <C.TableHeaderSpecial>Informações</C.TableHeaderSpecial>
                </tr>
              </thead>
              <C.TableBody>
                {currentData.map((candidate: Candidate) => (
                  <tr key={candidate.id}>
                    <C.TableData className="name">{candidate.profissional}</C.TableData>
                    <C.TableData className="idade">
                      {candidate.idade}
                    </C.TableData>
                    <C.TableData>{candidate.telefone}</C.TableData>
                    <C.TableData className="idade">
                      {candidate.cidade}
                    </C.TableData>
                    <C.TableData>{candidate.uf}</C.TableData>
                    <C.TableData>
                      {formatMoney(candidate.pretensao_salarial)}
                    </C.TableData>
                    {typeof candidate.pretensao_pj !== "undefined" && (
                      <C.TableData>
                        {formatMoney(candidate.pretensao_pj)}
                      </C.TableData>
                    )}
                    <C.TableData>
                      {getInitials(candidate.tipo_desejado_linkedin)}
                    </C.TableData>
                    <C.TableData>{candidate.nivel_funcao}</C.TableData>
                    <C.TableData
                      className="info"
                      onClick={() => openModal(candidate.id)}
                    >
                      Ver mais
                    </C.TableData>
                  </tr>
                ))}
              </C.TableBody>
            </C.StyledTable>
          </>
        ) : (
          <Loading />
        )}
      </C.TableContainer>

      {modal && <ModalInfoCandidate id={userID} toggleModal={closeModal} />}
    </>
  );
};

export { ListCandidates };
