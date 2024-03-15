import Logo from "../../image/logoTecnocar .png";
import * as C from "./style";
import Loading from "../loading";
import IconNo from "../../image/no_avaliable.svg";
import { useState } from "react";
import { ModalInfoCandidate } from "../modalInfoCandidates";

interface Candidate {
  id: number;
  profissional: string;
  idade: number;
  email: string;
  telefone: string;
  cidade: string;
}

interface CardCandidatesProps {
  currentData?: Candidate[] | null;
  totalPages?: number;
  currentPage?: number;
  handlePageChange?: (newPage: number) => void;
  availiado?: boolean;
  onCloseModal?: any;
}

const CardCandidates = ({
  currentData,
  availiado,
  onCloseModal,
}: CardCandidatesProps) => {
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

  return (
    <>
      <C.ContainerGrid>
        {currentData ? (
          currentData.map((candidate: Candidate, index: number) => (
            <C.Content key={`${candidate.id}_${index}`}>
              <C.LogoImage src={Logo} alt="" />
              {availiado && <C.Image src={IconNo} />}
              <C.Title>{candidate.profissional}</C.Title>
              <C.ContentInfo>
                <C.InfoCandidate>
                  <span>Idade:</span> {candidate.idade} anos
                </C.InfoCandidate>
                <C.InfoCandidate>
                  <p>Email:</p> {candidate.email}
                </C.InfoCandidate>
                <C.InfoCandidate>
                  <span>Telefone: </span>
                  {candidate.telefone}
                </C.InfoCandidate>
                <C.InfoCandidate>
                  <span>Cidade: </span>
                  {candidate.cidade}
                </C.InfoCandidate>
              </C.ContentInfo>
              <C.Button
                onClick={() => openModal(candidate.id)}
                style={{ marginLeft: "2em" }}
              >
                Ver Mais
              </C.Button>
            </C.Content>
          ))
        ) : (
          <Loading />
        )}
      </C.ContainerGrid>

      {currentData?.length === 0 && <h1> SEM CANDIDATOS</h1>}

      {modal && <ModalInfoCandidate id={userID} toggleModal={closeModal} />}
    </>
  );
};

export { CardCandidates };
